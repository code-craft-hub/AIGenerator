import Image from "next/image";

const LoaderComponent = () => {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
      <div className="w-10 h-10 relative animate-spin">
        <Image src="/logo.png" fill alt="logo" />
      </div>
      <p className="text-sm text-muted-foreground">
        Pedro is thinking...
      </p>
    </div>
  );
};

export default LoaderComponent;
