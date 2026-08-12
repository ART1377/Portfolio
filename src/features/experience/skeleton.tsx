import { Skeleton } from '@/components/ui/skeleton';

const ExperienceSkeleton = () => {
  return (
    <section className="bg-muted/30 py-20">
      <div className="section-container">
        <div className="mb-16 text-center">
          <Skeleton className="mx-auto mb-4 h-8 w-72" />
          <Skeleton className="mx-auto h-4 w-3/4" />
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <Skeleton className="mb-8 h-6 w-40" />
            <div className="space-y-6">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="space-y-4 rounded-xl border p-4">
                  <div className="flex justify-between">
                    <div>
                      <Skeleton className="mb-2 h-5 w-32" />
                      <Skeleton className="h-4 w-24" />
                    </div>
                    <Skeleton className="h-5 w-20 rounded-full" />
                  </div>
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                  <div className="mt-2 flex flex-wrap gap-2">
                    {[...Array(3)].map((_, j) => (
                      <Skeleton key={j} className="h-6 w-16 rounded-full" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <Skeleton className="mb-8 h-6 w-32" />
            <div className="space-y-6">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="space-y-4 rounded-xl border p-4">
                  <div className="flex justify-between">
                    <div>
                      <Skeleton className="mb-2 h-5 w-32" />
                      <Skeleton className="h-4 w-24" />
                    </div>
                    <Skeleton className="h-5 w-20 rounded-full" />
                  </div>
                  <Skeleton className="h-4 w-full" />
                </div>
              ))}
            </div>

            <div className="mt-12">
              <Skeleton className="mb-6 h-5 w-32" />
              <div className="space-y-4">
                {[...Array(2)].map((_, i) => (
                  <div key={i} className="flex items-center justify-between rounded-xl border p-4">
                    <div>
                      <Skeleton className="mb-1 h-4 w-28" />
                      <Skeleton className="h-3 w-20" />
                    </div>
                    <Skeleton className="h-5 w-16 rounded-full" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSkeleton;
