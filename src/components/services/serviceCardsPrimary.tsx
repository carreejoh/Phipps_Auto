import React from "react";
import { serviceCardConfig, serviceConfig, clientConfig } from "../../client-config";
import { Link } from "react-router-dom";

const ServiceCardsPrimary = React.forwardRef<HTMLDivElement>((_, ref) => {
  const isTailwindBg = serviceConfig.bg.startsWith("bg-");

  return (
    <section
      ref={ref}
      className={`
        relative
        px-6 sm:px-6 md:px-8 lg:px-24 xl:px-28 2xl:px-48 py-16 text-base-content
        ${isTailwindBg ? serviceConfig.bg : "bg-cover bg-center"}
      `}
      style={!isTailwindBg ? { backgroundImage: serviceConfig.bg } : undefined}
    >
      {!isTailwindBg && (
        <div className="absolute inset-0 bg-black/85 z-0 pointer-events-none" />
      )}

      <div className="relative z-10">
        <h2 className="text-3xl font-bold font-LemonMilk text-base-content text-center mb-12">
          What We Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 mb-12">
          {serviceCardConfig.map((service, index) => (
            <div key={index} className="card bg-base-100 shadow-md w-full">
              <figure>
                <img
                  src={service.image}
                  alt={service.title}
                  className="brightness-60 w-full h-48 object-cover"
                />
              </figure>
              <div className="card-body p-0">
                <h2 className="card-title flex justify-center text-base-content bg-primary text-black p-2 text-xl font-bold">
                  {service.title}
                </h2>
                <p className="text-sm text-base-content/80 p-3 pt-2 pb-0">{service.description}</p>
                <ul className="list-disc list-inside text-sm p-3 pt-0 text-base-content/80">
                  {service.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full px-6 py-6 text-center">
          <p className="text-lg font-semibold text-base-content mb-4">
            Not seeing what you're looking for? We offer much more than what’s listed here.
          </p>
          <Link
            to="/#contact"
            className={`
              ${clientConfig.borders}
              btn btn-lg bg-primary border-primary text-black font-bold text-lg
            `}
          >
            Contact Us to Inquire
          </Link>
        </div>
      </div>
    </section>
  );
});

export default ServiceCardsPrimary;
