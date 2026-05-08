export function openMap(url: string): void {
  window.open(url, '_blank', 'noopener,noreferrer');
}

export function scrollToSection(sectionId: string): void {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

export async function shareInvitation(): Promise<void> {
  const shareData = {
    title: 'Nan & Tan - Housewarming Ceremony',
    text: 'ขอเรียนเชิญร่วมงานทำบุญขึ้นบ้านใหม่ และพิธีผูกข้อมือ',
    url: window.location.href,
  };

  if (navigator.share) {
    try {
      await navigator.share(shareData);
    } catch (err) {
      console.log('Share cancelled');
    }
  } else {
    // Fallback: copy to clipboard
    try {
      await navigator.clipboard.writeText(window.location.href);
      alert('คัดลอกลิงก์เรียบร้อยแล้ว');
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  }
}
