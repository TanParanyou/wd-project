import {
  AnimatedSection,
  HeroSection,
  LocationSection,
  ScheduleSection,
  DressCodeSection,
  GallerySection,
  RouteSelectorSection,
  ContactSection,
  ParkingSection,
  DonationSection,
  GuestbookSection,
  FooterSection,
  MobileQuickActions,
  StickyNav,
  BackgroundMusic,
} from "@/features/invitation";

export default function HomePage() {
  return (
    <div className="relative">
      <main className="snap-container">
        <div className="snap-section">
          <HeroSection />
        </div>

        <AnimatedSection animation="fade-up" delay={0.1} className="snap-section">
          <ScheduleSection />
        </AnimatedSection>

        <AnimatedSection animation="scale" delay={0.1} className="snap-section">
          <DressCodeSection />
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={0.1} className="snap-section">
          <GallerySection />
        </AnimatedSection>

        <AnimatedSection animation="fade-up" className="snap-section">
          <LocationSection />
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={0.1} className="snap-section">
          <RouteSelectorSection />
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={0.1} className="snap-section">
          <ContactSection />
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={0.1} className="snap-section">
          <ParkingSection />
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={0.1} className="snap-section">
          <GuestbookSection />
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={0.1} className="snap-section">
          <DonationSection />
        </AnimatedSection>

        <AnimatedSection animation="fade-in" delay={0.1} className="snap-section">
          <FooterSection />
        </AnimatedSection>
      </main>

      {/* <MobileQuickActions /> */}
      <StickyNav />
      <BackgroundMusic />
    </div>
  );
}
