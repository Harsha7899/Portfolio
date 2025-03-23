"use client";

import { Button } from "@nextui-org/react";
import { Download } from "lucide-react";
import { useEffect, useState } from "react";
export function ResumeButton() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleDownload = () => {
    if (!isClient) return; // Ensure the component is mounted on the client

    const link = document.createElement("a");
    link.href = "/Harsha_Resume.pdf";
    link.download = "Harsha_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button
      color="primary"
      variant="shadow"
      radius="full"
      size="md"
      startContent={<Download />}
      onClick={handleDownload}
      className="font-medium"
    >
      Download Resume
    </Button>
  );
}

export function MobileResumeButton() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Harsha_Resume.pdf";
    link.download = "Harsha_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button
      color="primary"
      variant="shadow"
      radius="full"
      size="sm"
      startContent={<Download />}
      onClick={handleDownload}
      className="font-medium"
    >
      Resume
    </Button>
  );
}
