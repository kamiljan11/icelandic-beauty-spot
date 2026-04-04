const Booking = () => {
  return (
    <section id="booking" className="py-24 md:py-32 bg-sage-light relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-3">
          Bóka tíma
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-6">
          Tilbúin/n að byrja?
        </h2>
        <p className="font-body text-sm text-muted-foreground leading-relaxed mb-10 max-w-lg mx-auto">
          Hafðu samband við okkur til að bóka tíma eða fáðu ráðgjöf um hvaða
          meðferð hentar þér best. Við bjóðum upp á persónulega þjónustu og
          sérhannaðar meðferðir.
        </p>

        <form className="max-w-md mx-auto space-y-4 text-left">
          <div>
            <label className="font-body text-xs text-muted-foreground block mb-1">Nafn</label>
            <input
              type="text"
              placeholder="Fullt nafn"
              className="w-full bg-background border border-border rounded-sm px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
          <div>
            <label className="font-body text-xs text-muted-foreground block mb-1">Netfang</label>
            <input
              type="email"
              placeholder="netfang@dæmi.is"
              className="w-full bg-background border border-border rounded-sm px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
          <div>
            <label className="font-body text-xs text-muted-foreground block mb-1">Símanúmer</label>
            <input
              type="tel"
              placeholder="+354 XXX XXXX"
              className="w-full bg-background border border-border rounded-sm px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
          <div>
            <label className="font-body text-xs text-muted-foreground block mb-1">Meðferð</label>
            <select className="w-full bg-background border border-border rounded-sm px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary">
              <option value="">Veldu meðferð...</option>
              <option>Klassísk andlitsmeðferð</option>
              <option>Djúphreinsunarmeðferð</option>
              <option>Jarðhita-mineral andlitsmeðferð</option>
              <option>Anti-aging lúxusmeðferð</option>
              <option>Íslenskt saltskrúbb</option>
              <option>Heitt steinaolíunudd</option>
              <option>Jarðhitabaðsmeðferð</option>
              <option>Heildar-líkamsmeðferð</option>
              <option>Makeupp fyrir tilefni</option>
            </select>
          </div>
          <div>
            <label className="font-body text-xs text-muted-foreground block mb-1">Skilaboð</label>
            <textarea
              placeholder="Skilaboð eða sérstakar óskir..."
              rows={3}
              className="w-full bg-background border border-border rounded-sm px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-1 focus:ring-primary resize-none"
            />
          </div>
          <button
            type="button"
            className="w-full bg-primary text-primary-foreground px-8 py-3.5 rounded-sm font-body text-sm tracking-wide hover:opacity-90 transition-opacity"
          >
            Senda bókun
          </button>
        </form>
      </div>
    </section>
  );
};

export default Booking;
