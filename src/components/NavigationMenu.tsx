import { Button } from "@/components/ui/button";

export function NavigationMenu() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const menuItems = [
    { id: 'about', label: 'Hakkımda' },
    { id: 'recipes', label: 'Tarifler' },
    { id: 'contact', label: 'İletişim' },
  ];

  return (
    <nav className="flex flex-col gap-4 mt-8">
      {menuItems.map((item) => (
        <Button
          key={item.id}
          variant="ghost"
          className="w-full justify-start"
          onClick={() => scrollToSection(item.id)}
        >
          {item.label}
        </Button>
      ))}
    </nav>
  );
}