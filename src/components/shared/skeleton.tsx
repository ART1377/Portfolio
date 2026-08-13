import { cn } from '@/lib/utils';

interface SkeletonProps {
  className?: string;
}

const Skeleton = ({ className }: SkeletonProps) => {
  return <div className={cn('bg-muted animate-pulse rounded-md', className)} aria-hidden="true" />;
};

export const ProjectCardSkeleton = () => {
  return (
    <div className="space-y-4 rounded-lg border p-6">
      <Skeleton className="h-48 w-full" />
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-4 w-1/2" />
      <div className="flex gap-2">
        <Skeleton className="h-8 w-20" />
        <Skeleton className="h-8 w-20" />
      </div>
    </div>
  );
};

export const ProfileSkeleton = () => {
  return (
    <div className="space-y-4">
      <Skeleton className="mx-auto h-32 w-32 rounded-full" />
      <Skeleton className="mx-auto h-8 w-48" />
      <Skeleton className="mx-auto h-4 w-96" />
    </div>
  );
};

export default Skeleton;
