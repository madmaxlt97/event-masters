export default function GoogleMaps() {
  return (
    <div className="h-[400px] w-full overflow-hidden rounded-3xl lg:h-[550px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1938.882610342199!2d25.277346512388696!3d54.69672609754147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd9403fd7caafd%3A0xfc2304a001799df9!2sKonstitucijos%20pr.%207A-2%20auk%C5%A1tas%2C%20Vilnius%2C%2009307%20Vilniaus%20m.%20sav.!5e0!3m2!1sru!2slt!4v1786953892017!5m2!1sru!2slt"
        title="Event Masters location on Google Maps"
        className="h-full w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}
