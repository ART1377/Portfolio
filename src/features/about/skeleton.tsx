import { Skeleton } from '@/components/ui/skeleton';

const AboutSkeleton = () => {
  return (
    <section id="about">
      <div className="section-container py-20">
        <div className="mb-16 text-center">
          <Skeleton className="mx-auto mb-4 h-8 w-48" />
          <div className="mx-auto max-w-2xl space-y-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="mx-auto h-4 w-3/4" />
          </div>
        </div>

        <div className="grid items-start gap-12 md:grid-cols-2">
          <div className="space-y-3">
            {[...Array(2)].map((_, i) => (
              <Skeleton key={i} className="h-4 w-full" />
            ))}
            <div className="mt-4 flex flex-wrap gap-2">
              {[...Array(8)].map((_, i) => (
                <Skeleton key={i} className="h-6 w-20 rounded-full" />
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="rounded-lg border p-6">
                <div className="mb-4 flex items-center gap-3">
                  <Skeleton className="h-8 w-8 rounded-full" />
                  <Skeleton className="h-5 w-32" />
                </div>
                <Skeleton className="mb-2 h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSkeleton;
