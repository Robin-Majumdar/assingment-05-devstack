export default function Loading() {
    return (
        <div className="flex min-h-40 w-full items-center justify-center gap-3">
            <span className="loading loading-spinner loading-md"></span>

            <p className="text-sm font-medium text-slate-500">
                Loading Technologies...
            </p>
        </div>
    );
}