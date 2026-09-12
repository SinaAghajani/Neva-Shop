import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { ProductGallery } from "@/components/product/ProductGallery";
import { ProductInfo } from "@/components/product/ProductInfo";
import { ProductReviews } from "@/components/product/ProductReviews";
import { RelatedProducts } from "@/components/product/RelatedProducts";
import { products } from "@/data/products";

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return {
      title: "محصول پیدا نشد",
    };
  }

  return {
    title: product.name,
    description: product.shortDescription,
    openGraph: {
      title: product.name,
      description: product.shortDescription,
      images: product.images[0]?.url ? [product.images[0].url] : undefined,
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen py-8 sm:py-10">
      <Container>
        <div className="mb-8 flex items-center gap-2 overflow-hidden text-xs text-(--muted)">
          <Link href="/" className="shrink-0 hover:text-(--primary)">
            خانه
          </Link>

          <ChevronLeft className="h-3.5 w-3.5 shrink-0" />

          <Link href="/products" className="shrink-0 hover:text-(--primary)">
            محصولات
          </Link>

          <ChevronLeft className="h-3.5 w-3.5 shrink-0" />

          <span className="truncate text-(--foreground)">{product.name}</span>
        </div>

        <section className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <ProductGallery images={product.images} productName={product.name} />

          <ProductInfo product={product} />
        </section>

        <section className="mt-16 border-t border-(--border) pt-12">
          <ProductReviews reviews={product.reviews} rating={product.rating} />
        </section>

        <section className="mt-16 border-t border-(--border) pt-12">
          <RelatedProducts product={product} />
        </section>
      </Container>
    </main>
  );
}
