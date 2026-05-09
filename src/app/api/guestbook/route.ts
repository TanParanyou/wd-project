import { NextResponse } from "next/server";

export async function GET() {
  try {
    const sheetId = "1IWiYbQtrLwbvRgsK4O12uOMDyhMFOTC2OhdvpcYtMQI";
    const csvUrl = `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=csv`;
    
    const response = await fetch(csvUrl, {
      headers: {
        "Accept": "text/csv",
      },
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status}`);
    }
    
    const csvText = await response.text();
    
    // Parse CSV
    const lines = csvText.split("\n");
    const entries = [];
    
    // ข้าม header row (แถวแรก)
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;
      
      // แยกคอลัมน์ด้วย comma (รองรับ quotes)
      const columns = parseCSVLine(line);
      
      if (columns.length >= 3) {
        entries.push({
          timestamp: columns[0] || "",
          name: columns[1] || "Anonymous",
          message: columns[2] || "",
        });
      }
    }
    
    // เรียงจากใหม่ไปเก่า และเอาแค่ 10 อันสุดท้าย
    const recentEntries = entries.reverse().slice(0, 10);
    
    return NextResponse.json({ entries: recentEntries });
  } catch (error) {
    console.error("Error fetching guestbook:", error);
    return NextResponse.json(
      { error: "Failed to fetch guestbook entries" },
      { status: 500 }
    );
  }
}

// Helper function to parse CSV line (handle quotes)
function parseCSVLine(line: string): string[] {
  const result = [];
  let current = "";
  let inQuotes = false;
  
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    
    if (char === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"';
        i++; // skip next quote
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === ',' && !inQuotes) {
      result.push(current.trim());
      current = "";
    } else {
      current += char;
    }
  }
  
  result.push(current.trim());
  return result;
}
