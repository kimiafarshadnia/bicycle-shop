import { HeroSection, AboutSection, ParallaxScrollingEffect, NewProducts, ProductsSection, BrandSection } from "Components";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col pt-24">
      <HeroSection />
      <AboutSection />
      <NewProducts />
      <ParallaxScrollingEffect imageUrl={"images/parallax.jpeg"} text={"Best Rated Bicycle 2024"} />
      <ProductsSection />
      <BrandSection />
    </main>
  );
}
