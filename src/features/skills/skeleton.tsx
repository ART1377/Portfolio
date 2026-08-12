import { Skeleton } from '@/components/ui/skeleton';

const SkillsSkeleton = () => {
  return (
    <section id="skills" className="bg-muted/30 py-20">
      <div className="section-container">
        <div className="mb-16 text-center">
          <Skeleton className="mx-auto mb-4 h-8 w-48" />
          <Skeleton className="mx-auto h-4 w-3/4" />
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="space-y-4 rounded-lg border p-6 shadow-sm">
              <Skeleton className="mx-auto mb-2 h-6 w-40" />
              {[...Array(4)].map((_, j) => (
                <div key={j} className="space-y-1">
                  <div className="flex justify-between">
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-4 w-10" />
                  </div>
                  <Skeleton className="h-2 w-full rounded-full" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSkeleton;
