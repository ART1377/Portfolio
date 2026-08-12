import { Skeleton } from '@/components/ui/skeleton';

const HeroSkeleton = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center pt-16">
      <div className="section-container relative z-10 text-center">
        <div className="mb-8">
          <div className="mx-auto mb-6 h-32 w-32 animate-pulse rounded-full bg-linear-to-r from-gray-300 to-gray-200" />
          <Skeleton className="mx-auto mb-4 h-8 w-64" />
          <Skeleton className="mx-auto mb-8 h-6 w-48" />
          <Skeleton className="mx-auto mb-2 h-5 w-[80%]" />
          <Skeleton className="mx-auto mb-8 h-5 w-[60%]" />
        </div>

        <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Skeleton className="h-10 w-40 rounded-md" />
          <Skeleton className="h-10 w-40 rounded-md" />
        </div>

        <div className="mb-12 flex justify-center space-x-6">
          <Skeleton className="h-10 w-10 rounded-full" />
          <Skeleton className="h-10 w-10 rounded-full" />
          <Skeleton className="h-10 w-10 rounded-full" />
        </div>

        <Skeleton className="mx-auto h-10 w-10 rounded-full" />
      </div>
    </section>
  );
};

export default HeroSkeleton;
