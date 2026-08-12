import { Skeleton } from '@/components/ui/skeleton';

const ContactSkeleton = () => {
  return (
    <section className="py-20">
      <div className="section-container">
        <div className="mb-16 text-center">
          <Skeleton className="mx-auto mb-4 h-10 w-64 rounded-md" />
          <Skeleton className="mx-auto h-5 w-3/4 rounded-md" />
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="flex h-full flex-col justify-center">
            <div className="mb-6">
              <Skeleton className="mb-2 h-7 w-48 rounded-md" />
              <Skeleton className="h-4 w-72 rounded-md" />
            </div>

            <form className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <Skeleton className="h-10 rounded-md" />
                <Skeleton className="h-10 rounded-md" />
              </div>
              <Skeleton className="h-10 rounded-md" />
              <Skeleton className="h-24 rounded-md" />
              <Skeleton className="mt-2 h-12 w-full rounded-md" />
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <Skeleton className="mb-6 h-7 w-44 rounded-md" />
              <div className="space-y-4">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <Skeleton className="h-5 w-5 rounded-full" />
                    <Skeleton className="h-5 w-64 rounded-md" />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Skeleton className="mb-4 h-7 w-32 rounded-md" />
              <div className="flex space-x-4">
                {[...Array(3)].map((_, i) => (
                  <Skeleton key={i} className="h-10 w-10 rounded-full" />
                ))}
              </div>
            </div>

            <div className="mt-4">
              <Skeleton className="mb-2 h-7 w-40 rounded-md" />
              <Skeleton className="h-12 w-full rounded-md" />
              <Skeleton className="mt-2 h-4 w-11/12 rounded-md" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSkeleton;
