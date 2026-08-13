import { Skeleton } from '@/components/ui/skeleton';

const ProjectsSkeleton = () => {
  return (
    <section id="projects" className="py-20">
      <div className="section-container">
        <div className="mb-16 text-center">
          <Skeleton className="mx-auto mb-4 h-8 w-60" />
          <Skeleton className="mx-auto h-4 w-3/4" />
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="space-y-4 overflow-hidden rounded-xl border shadow-sm">
              <Skeleton className="h-60 w-full" />
              <div className="space-y-2 px-4">
                <Skeleton className="h-5 w-3/4" />
                <Skeleton className="h-4 w-full" />
              </div>
              <div className="flex flex-wrap gap-2 px-4 py-2">
                {[...Array(3)].map((_, j) => (
                  <Skeleton key={j} className="h-6 w-16 rounded-full" />
                ))}
              </div>
              <div className="flex gap-2 px-4 pb-4">
                <Skeleton className="h-8 w-full rounded-md" />
                <Skeleton className="h-8 w-10 rounded-md" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSkeleton;
