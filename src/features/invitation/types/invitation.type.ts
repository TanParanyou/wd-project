/**
 * Type definitions for the Invitation feature
 * All data structures are defined here for type safety
 */

export interface Couple {
  bride: Person;
  groom: Person;
}

export interface Person {
  nickname: string;
  fullName: string;
}

export interface Event {
  title: string;
  subtitle: string;
  date: string;
  locationName: string;
  address: {
    th: string;
    en: string;
  };
  intro: string;
}

export interface ScheduleItem {
  time: string;
  title: string;
}

export interface DressCode {
  title: string;
  description: string;
  tone: string;
}

export interface Map {
  mainMapUrl: string;
  embedUrl: string;
  qrImage: string;
}

export interface Route {
  id: string;
  name: string;
  address: string;
  mapUrl: string;
  streetViewUrl: string;
  description: string;
  vehicleType: "car" | "motorcycle";
  steps: RouteStep[];
}

export interface RouteStep {
  title: string;
  description: string;
  image: string;
}

export interface Contact {
  name: string;
  phone: string;
  lineUrl: string;
}

export interface GalleryImage {
  alt: string;
  src: string;
}

export interface RSVP {
  enabled: boolean;
  label: string;
  url: string;
}

export interface Donation {
  enabled: boolean;
  title: string;
  description: string;
  accounts: DonationAccount[];
}

export interface DonationAccount {
  bank: string;
  accountNumber: string;
  accountName: string;
  qrImage?: string;
}

export interface Guestbook {
  enabled: boolean;
  title: string;
  description: string;
  formUrl: string;
  sheetId: string;
}

export interface Parking {
  enabled: boolean;
  title: string;
  description: string;
  locations: ParkingLocation[];
}

export interface ParkingLocation {
  id: string;
  name: string;
  description: string;
  mapUrl?: string;
  embedUrl?: string;
  capacity?: string;
  type: "car" | "motorcycle" | "both";
  distance?: string;
  image?: string;
}

export interface InvitationConfig {
  couple: Couple;
  event: Event;
  schedule: ScheduleItem[];
  dressCode: DressCode;
  map: Map;
  routes: Route[];
  contacts: Contact[];
  gallery: GalleryImage[];
  rsvp: RSVP;
  donation: Donation;
  guestbook: Guestbook;
  parking: Parking;
}
