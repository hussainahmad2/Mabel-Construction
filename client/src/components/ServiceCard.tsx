import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

export default function ServiceCard({ icon: Icon, title, description, features }: ServiceCardProps) {
  return (
    <Card className="group hover-elevate active-elevate-2 h-full transform transition-all duration-300 hover:scale-105">
      <CardContent className="p-8 text-center">
        {/* 3D Icon */}
        <div className="relative mb-6">
          <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-primary/60 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 shadow-lg">
            <Icon className="w-10 h-10 text-primary-foreground" />
          </div>
          <div className="absolute inset-0 w-20 h-20 mx-auto bg-primary/20 rounded-xl transform translate-x-1 translate-y-1 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {description}
        </p>

        {/* Features */}
        <ul className="space-y-2 text-sm text-left">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-muted-foreground">
              <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}