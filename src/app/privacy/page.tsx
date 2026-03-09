import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy e Cookie Policy | Altitudo",
  description:
    "Informativa sulla privacy e cookie policy di Altitudo - Noleggio Ferrari 296 GTS per eventi, matrimoni, shooting e compleanni.",
};

export default function PrivacyPage() {
  return (
    <main className="bg-black min-h-screen w-full">
      <div className="max-w-[800px] mx-auto px-6 py-12 lg:py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-aeonik text-white/70 text-[13px] hover:text-white transition-colors mb-10"
        >
          ← Torna alla home
        </Link>

        <h1 className="font-itc-blair text-white text-[28px] md:text-[36px] leading-tight mb-2 uppercase">
          Privacy e Cookie Policy
        </h1>
        <p className="font-aeonik text-white/70 text-[14px] mb-12">
          Ultimo aggiornamento: Marzo 2026
        </p>

        <div className="font-aeonik text-white/90 text-[14px] lg:text-[15px] leading-[1.75] space-y-10">
          {/* Introduzione */}
          <section>
            <h2 className="font-itc-blair text-white text-[20px] mb-4 uppercase">
              1. Introduzione
            </h2>
            <p>
              Altitudo Luxury Rent (&quot;noi&quot;, &quot;il Titolare&quot;) gestisce il
              servizio di noleggio Ferrari 296 GTS per eventi, matrimoni,
              shooting fotografici, compleanni e esperienze di guida. La presente
              informativa descrive come trattiamo i tuoi dati personali in
              relazione al sito web, ai form di richiesta informazioni e
              prenotazione, alla newsletter e ai cookie.
            </p>
          </section>

          {/* Titolare */}
          <section>
            <h2 className="font-itc-blair text-white text-[20px] mb-4 uppercase">
              2. Titolare del trattamento
            </h2>
            <p>
              Il titolare del trattamento è Altitudo Luxury Rent. Per esercitare
              i tuoi diritti o per domande sulla privacy puoi scriverci a:{" "}
              <a
                href="mailto:info@altitudo.club"
                className="text-white underline hover:opacity-90"
              >
                info@altitudo.club
              </a>{" "}
              o contattarci al numero 345 3096645.
            </p>
          </section>

          {/* Dati raccolti */}
          <section>
            <h2 className="font-itc-blair text-white text-[20px] mb-4 uppercase">
              3. Dati che raccogliamo
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Dati forniti da te:</strong> nome, cognome, indirizzo
                email, numero di telefono, messaggio, preferenze di pacchetto
                (es. evento Ferrari, prenotazione home, richiesta informazioni
                evento Tenuta Cambiaga), date e luoghi di ritiro/consegna quando
                compili i form di prenotazione o richiesta informazioni.
              </li>
              <li>
                <strong>Dati di navigazione:</strong> indirizzo IP, tipo di
                browser, pagine visitate e dati raccolti tramite cookie e
                tecnologie simili (vedi sezione Cookie).
              </li>
              <li>
                <strong>Dati di utilizzo:</strong> informazioni su come usi il
                sito (anche tramite Google Tag Manager e Facebook Pixel, solo
                previo tuo consenso).
              </li>
            </ul>
          </section>

          {/* Finalità */}
          <section>
            <h2 className="font-itc-blair text-white text-[20px] mb-4 uppercase">
              4. Finalità e base giuridica
            </h2>
            <p className="mb-3">
              Utilizziamo i tuoi dati per:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Gestione richieste e prenotazioni:</strong> rispondere alle
                richieste di informazioni, inviare preventivi, gestire
                prenotazioni di noleggio Ferrari (base: esecuzione di misure
                precontrattuali o contratto).
              </li>
              <li>
                <strong>Comunicazioni commerciali:</strong> invio di newsletter
                e comunicazioni su eventi e servizi (base: consenso).
              </li>
              <li>
                <strong>Analisi e miglioramento del sito:</strong> statistiche
                aggregate su visite e utilizzo (base: consenso, ove richiesto
                dalla normativa sui cookie).
              </li>
              <li>
                <strong>Marketing e remarketing:</strong> pubblicità mirata su
                piattaforme come Facebook/Instagram (base: consenso, tramite
                cookie).
              </li>
              <li>
                <strong>Adempimenti di legge:</strong> quando richiesto dalla
                legge.
              </li>
            </ul>
          </section>

          {/* Destinatari */}
          <section>
            <h2 className="font-itc-blair text-white text-[20px] mb-4 uppercase">
              5. Destinatari e trasferimenti
            </h2>
            <p className="mb-3">
              I tuoi dati possono essere condivisi con:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Fornitori di servizi di hosting e gestione del sito.</li>
              <li>Fornitori di servizi email per l&apos;invio delle risposte alle
                richieste e delle comunicazioni.</li>
              <li>Google (analytics e tag manager) e Meta (Facebook Pixel), solo
                previo tuo consenso ai cookie.</li>
            </ul>
            <p className="mt-4">
              Alcuni di questi soggetti possono trovarsi in Paesi extra-UE. In
              tal caso garantiamo adeguatezze (decisioni di commissione) o
              clausole contrattuali tipo approvate dalla Commissione europea.
            </p>
          </section>

          {/* Conservazione */}
          <section>
            <h2 className="font-itc-blair text-white text-[20px] mb-4 uppercase">
              6. Conservazione
            </h2>
            <p>
              Conserviamo i dati per il tempo necessario alle finalità indicate:
              dati di prenotazione e richieste per il tempo della relazione
              contrattuale e per gli adempimenti di legge (es. contabilità);
              dati di marketing fino a revoca del consenso; cookie secondo le
              rispettive policy (vedi sotto). I log e i dati tecnici possono
              essere conservati per il tempo necessario alla sicurezza e
              diagnostica.
            </p>
          </section>

          {/* Diritti */}
          <section>
            <h2 className="font-itc-blair text-white text-[20px] mb-4 uppercase">
              7. I tuoi diritti
            </h2>
            <p className="mb-3">
              In base al Regolamento (UE) 2016/679 puoi:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Ottenere conferma dell&apos;esistenza di dati e l&apos;accesso.</li>
              <li>Chiedere rettifica, cancellazione, limitazione del
                trattamento.</li>
              <li>Opporti al trattamento e richiedere la portabilità dei dati.</li>
              <li>Revocare il consenso in qualsiasi momento (senza pregiudicare
                la liceità del trattamento basato sul consenso prima della
                revoca).</li>
              <li>Proporre reclamo al Garante per la protezione dei dati
                personali (garanteprivacy.it).</li>
            </ul>
            <p className="mt-4">
              Per esercitare i diritti scrivi a{" "}
              <a
                href="mailto:info@altitudo.club"
                className="text-white underline hover:opacity-90"
              >
                info@altitudo.club
              </a>
              .
            </p>
          </section>

          {/* Cookie */}
          <section>
            <h2 className="font-itc-blair text-white text-[20px] mb-4 uppercase">
              8. Cookie e tecnologie simili
            </h2>
            <p className="mb-3">
              Il sito utilizza cookie e tecnologie simili per il funzionamento
              del sito, per analisi e per marketing.
            </p>
            <h3 className="font-aeonik-bold text-white text-[16px] mt-4 mb-2">
              Cookie tecnici (necessari)
            </h3>
            <p>
              Sono necessari per il funzionamento del sito (es. gestione
              sessione, preferenze di consenso). Non richiedono consenso.
            </p>
            <h3 className="font-aeonik-bold text-white text-[16px] mt-4 mb-2">
              Cookie analytics e di performance
            </h3>
            <p>
              Utilizziamo Google Tag Manager per raccogliere informazioni in
              forma aggregata su come i visitatori usano il sito (pagine
              visitate, provenienza). Questi cookie vengono attivati solo con il
              tuo consenso tramite il banner cookie.
            </p>
            <h3 className="font-aeonik-bold text-white text-[16px] mt-4 mb-2">
              Cookie di marketing / remarketing
            </h3>
            <p>
              Utilizziamo il Facebook Pixel (Meta) per mostrare annunci
              pertinenti sui social e per misurare l&apos;efficacia delle
              campagne. Questi cookie vengono attivati solo con il tuo consenso
              tramite il banner cookie.
            </p>
            <p className="mt-4">
              Puoi modificare le tue preferenze in qualsiasi momento tramite il
              link &quot;Preferenze cookie&quot; nel footer del sito o cancellando
              i cookie dal tuo browser.
            </p>
          </section>

          {/* Modifiche */}
          <section>
            <h2 className="font-itc-blair text-white text-[20px] mb-4 uppercase">
              9. Modifiche
            </h2>
            <p>
              Questa informativa può essere aggiornata. La data &quot;Ultimo
              aggiornamento&quot; in alto indica l&apos;ultima revisione. Ti
              invitiamo a consultarla periodicamente.
            </p>
          </section>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 text-center">
          <Link
            href="/"
            className="inline-block bg-white text-black font-itc-blair px-6 py-3 rounded-lg text-[13px] hover:bg-gray-100 transition-colors"
          >
            Torna alla home
          </Link>
        </div>
      </div>
    </main>
  );
}
