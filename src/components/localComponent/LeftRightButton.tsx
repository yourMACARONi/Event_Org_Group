import { Button } from "../ui/button";
import { Video } from "lucide-react";
import { Search } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { ChevronLeft } from "lucide-react";

export default function FeatureButton() {
  return (
    <>
      <Button variant="outline" size="icon">
        <ChevronLeft className="h-4 w-4 text-black" />
      </Button>

      <Button variant="outline" size="icon">
        <ChevronRight className="h-4 w-4 text-black" />
      </Button>
    </>
  );
}
