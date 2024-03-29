import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://ihsenbouallegue.github.io",
  base: "/openipc-docs",
  integrations: [
    starlight({
      title: "Documentation",
      social: {
        github: "https://github.com/withastro/starlight",
      },
      logo: {
        light: './src/assets/logo/OpenIPC__OPENIPC_logo_vertical.svg',
        dark: './src/assets/logo/OpenIPC__OPENIPC_logo_vertical_white.svg',
      },
      sidebar: [
        {
          label: "Getting Started",
          items: [
            {
              label: "About the Project",
              link: "/getting-started/introduction/",
            },
            { label: "Quick Start", link: "/getting-started/quick-start/" },
            {
              label: "Basic Configuration",
              link: "/getting-started/configuration/",
            },
          ],
        },
        {
          label: "Use Cases",
          items: [
            {
              label: "FPV (First Person View)",
              autogenerate: { directory: "/use-cases/fpv" },
            },
            {
              label: "Home Automation",
              autogenerate: { directory: "/use-cases/home-automation" },
            },
            {
              label: "Video Surveillance",
              autogenerate: { directory: "/use-cases/video-surveillance" },
            },
          ],
        },
        {
          label: "Hardware",
          items: [
            {
              label: "Supported Hardware",
              link: "/hardware/supported-devices/",
            },
            {
              label: "Flashing Firmware",
              link: "/hardware/flashing-firmware/",
            },
            {
              label: "Troubleshooting Guide",
              link: "/hardware/troubleshooting/",
            },
          ],
        },
        {
          label: "Software",
          items: [
            {
              label: "Software Overview",
              link: "/software/software-overview/",
            },
            {
              label: "Configuration Details",
              link: "/software/configuration-details/",
            },
            { label: "Firmware Updates", link: "/software/firmware-updates/" },
          ],
        },
        {
          label: "Development",
          items: [
            // Placeholder for API Documentation
            {
              label: "Contribution Guidelines",
              link: "/development/contribution-guidelines/",
            },
            {
              label: "Projects & Applications",
              link: "/development/projects-applications/",
            },
          ],
        },
        {
          label: "Resources",
          items: [
            { label: "Frequently Asked Questions", link: "/resources/faq/" },
            // Placeholder for Community Forum link
            { label: "Useful Links", link: "/resources/useful-links/" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
