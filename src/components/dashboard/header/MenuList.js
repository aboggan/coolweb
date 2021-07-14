import React from "react";
import MenuItem from "./MenuItem";

export default function MenuList(props) {
  const menuItems = [
    {
      label: "Home",
      icon: "home",
      href: "/dashboard",
    },
    {
      label: "Clientes",
      icon: "clientes",
      href: "/dashboard/clientes",
    },
    {
      label: "Mensajes",
      icon: "mensajes",
      href: "/dashboard/mensajes",
    },
    {
      label: "Documentos",
      icon: "documentos",
      href: "/dashboard/documentos",
    },
    {
      label: "Editor Web",
      icon: "editor",
      href: "/dashboard/editor",
    },
    {
      label: "Perfil",
      icon: "perfil",
      href: "/dashboard/perfil",
    },
  ];

  return (
    <div className="menu-items">
      {menuItems.map((item) => {
        return (
          <MenuItem label={item.label} icon={item.icon} href={item.href} />
        );
      })}
    </div>
  );
}
