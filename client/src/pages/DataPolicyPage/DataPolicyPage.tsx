import React from 'react'
import { Page } from '../../components/Page/Page'
import { Content } from '../../components/Content/Content'
import { FormattedHtml } from '../../components/FormattedHtml/FormattedHtml'
import { H1Title } from '../../components/H1Title/H1Title'
import { useTranslation } from 'react-i18next'
import { Button } from '../../components/Button/Button'
import { stopGoogleAnalytics } from '../../googleAnalytics'
import { Header } from '../../components/Header'

export default function DataPolicyPage() {
  const { t } = useTranslation()
  return (
    <Page>
      <Header />
      <Content restrictMaxWidth scrollable>
        <H1Title>{t('dataPolicy')}</H1Title>
        <FormattedHtml>
          <h2>1. Datenschutz auf einen Blick</h2>
          <h3>Allgemeine Hinweise</h3>
          Die folgenden Hinweise geben einen einfachen Überblick darüber, was
          mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website
          besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
          persönlich identifiziert werden können. Ausführliche Informationen zum
          Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten
          Datenschutzerklärung.
          <h3>Datenerfassung auf unserer Website</h3>
          <h3>
            Wer ist verantwortlich für die Datenerfassung auf dieser Website?
          </h3>
          Die Datenverarbeitung auf dieser Website erfolgt durch den
          Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser
          Website entnehmen.
          <h3>Wie erfassen wir Ihre Daten?</h3>
          Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
          mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in ein
          Kontaktformular eingeben. Andere Daten werden automatisch beim Besuch
          der Website durch unsere IT-Systeme erfasst. Das sind vor allem
          technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit
          des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch,
          sobald Sie unsere Website betreten.
          <h3>Wofür nutzen wir Ihre Daten?</h3>
          Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung
          der Website zu gewährleisten. Andere Daten können zur Analyse Ihres
          Nutzerverhaltens verwendet werden.
          <h3>Welche Rechte haben Sie bezüglich Ihrer Daten?</h3>
          Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft,
          Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu
          erhalten. Sie haben außerdem ein Recht, die Berichtigung, Sperrung
          oder Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren
          Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im
          Impressum angegebenen Adresse an uns wenden. Des Weiteren steht Ihnen
          ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu. Außerdem
          haben Sie das Recht, unter bestimmten Umständen die Einschränkung der
          Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Details
          hierzu entnehmen Sie der Datenschutzerklärung unter „Recht auf
          Einschränkung der Verarbeitung“.
          <h2>2. Allgemeine Hinweise und Pflichtinformationen</h2>
          <h3>Datenschutz</h3>
          Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten
          sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und
          entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser
          Datenschutzerklärung. Wenn Sie diese Website benutzen, werden
          verschiedene personenbezogene Daten erhoben. Personenbezogene Daten
          sind Daten, mit denen Sie persönlich identifiziert werden können. Die
          vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben
          und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck
          das geschieht. Wir weisen darauf hin, dass die Datenübertragung im
          Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken
          aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch
          Dritte ist nicht möglich.
          <h3>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
          Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen
          Einwilligung möglich. Sie können eine bereits erteilte Einwilligung
          jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail
          an uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten
          Datenverarbeitung bleibt vom Widerruf unberührt. Widerspruchsrecht
          gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung
          (Art. 21 DSGVO) Wenn die Datenverarbeitung auf Grundlage von Art. 6
          Abs. 1 lit. e oder f DSGVO erfolgt, haben Sie jederzeit das Recht, aus
          Gründen, die sich aus Ihrer besonderen Situation ergeben, gegen die
          Verarbeitung Ihrer personenbezogenen Daten Widerspruch einzulegen;
          dies gilt auch für ein auf diese Bestimmungen gestütztes Profiling.
          Die jeweilige Rechtsgrundlage, auf denen eine Verarbeitung beruht,
          entnehmen Sie dieser Datenschutzerklärung. Wenn Sie Widerspruch
          einlegen, werden wir Ihre betroffenen personenbezogenen Daten nicht
          mehr verarbeiten, es sei denn, wir können zwingende schutzwürdige
          Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte
          und Freiheiten überwiegen oder die Verarbeitung dient der
          Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen
          (Widerspruch nach Art. 21 Abs. 1 DSGVO). Werden Ihre personenbezogenen
          Daten verarbeitet, um Direktwerbung zu betreiben, so haben Sie das
          Recht, jederzeit Widerspruch gegen die Verarbeitung Sie betreffender
          personenbezogener Daten zum Zwecke derartiger Werbung einzulegen; dies
          gilt auch für das Profiling, soweit es mit solcher Direktwerbung in
          Verbindung steht. Wenn Sie widersprechen, werden Ihre
          personenbezogenen Daten anschließend nicht mehr zum Zwecke der
          Direktwerbung verwendet (Widerspruch nach Art. 21 Abs. 2 DSGVO).
          <h3>Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
          Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein
          Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem
          Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes
          oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht
          besteht unbeschadet anderweitiger verwaltungsrechtlicher oder
          gerichtlicher Rechtsbehelfe.
          <h3>Recht auf Datenübertragbarkeit</h3>
          Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung
          oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich
          oder an einen Dritten in einem gängigen, maschinenlesbaren Format
          aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an
          einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es
          technisch machbar ist.
          <h3>SSL- bzw. TLS-Verschlüsselung</h3>
          Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der
          Übertragung vertraulicher Inhalte, wie zumBeispiel Bestellungen oder
          Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL-bzw.
          TLS- Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie
          daran, dass die Adresszeile des Browsers von “http://” auf “https://”
          wechselt und an dem Schloss-Symbol in Ihrer Browserzeile. Wenn die
          SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie
          an uns übermitteln, nicht von Dritten mitgelesen werden.
          <h3>Auskunft, Sperrung, Löschung und Berichtigung</h3>
          Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit
          das Recht auf unentgeltliche Auskunft über Ihre gespeicherten
          personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck
          der Datenverarbeitung und ggf. ein Recht auf Berichtigung, Sperrung
          oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema
          personenbezogene Daten können Sie sich jederzeit unter der im
          Impressum angegebenen Adresse an uns wenden.
          <h3>Recht auf Einschränkung der Verarbeitung</h3>
          Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer
          personenbezogenen Daten zu verlangen. Hierzu können Sie sich jederzeit
          unter der im Impressum angegebenen Adresse an uns wenden. Das Recht
          auf Einschränkung der Verarbeitung besteht in folgenden Fällen: Wenn
          Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen
          Daten bestreiten, benötigen wir in der Regel Zeit, um dies zu
          überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die
          Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu
          verlangen. Wenn die Verarbeitung Ihrer personenbezogenen Daten
          unrechtmäßig geschah / geschieht, können Sie statt der Löschung die
          Einschränkung der Datenverarbeitung verlangen. Wenn wir Ihre
          personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur
          Ausübung, Verteidigung oder Geltendmachung von Rechtsansprüchen
          benötigen, haben Sie das Recht, statt der Löschung die Einschränkung
          der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Wenn Sie
          einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine
          Abwägung zwischen Ihren und unseren Interessen vorgenommen werden.
          Solange noch nicht feststeht, wessen Interessen überwiegen, haben Sie
          das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen
          Daten zu verlangen. Wenn Sie die Verarbeitung Ihrer personenbezogenen
          Daten eingeschränkt haben, dürfen diese Daten – von ihrer Speicherung
          abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung,
          Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der
          Rechte einer anderen natürlichen oder juristischen Person oder aus
          Gründen eines wichtigen öffentlichen Interesses der Europäischen Union
          oder eines Mitgliedstaats verarbeitet werden.
          <h2>3. Datenerfassung auf unserer Website</h2>
          Anfrage per E-Mail, Telefon oder Telefax Wenn Sie uns per E-Mail,
          Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller
          daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum
          Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und
          verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung
          weiter. Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6
          Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines
          Vertrags zusammenhängt oder zur Durchführung vorvertraglicher
          Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die
          Verarbeitung auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) und /
          oder auf unseren berechtigten Interessen (Art. 6 Abs. 1 lit. f DSGVO),
          da wir ein berechtigtes Interesse an der effektiven Bearbeitung der an
          uns gerichteten Anfragen haben. Die von Ihnen an uns per
          Kontaktanfragen übersandten Daten verbleiben bei uns, bis Sie uns zur
          Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder
          der Zweck für die Datenspeicherung entfällt (z. B. nach
          abgeschlossener Bearbeitung Ihres Anliegens). Zwingende gesetzliche
          Bestimmungen – insbesondere gesetzliche Aufbewahrungsfristen – bleiben
          unberührt.
          <h2>4. Newsletter</h2>
          <h3>Newsletterdaten</h3>
          Wenn Sie den auf der Website angebotenen Newsletter beziehen möchten,
          benötigen wir von Ihnen eine E- Mail-Adresse sowie Informationen,
          welche uns die Überprüfung gestatten, dass Sie der Inhaber der
          angegebenen E-Mail-Adresse sind und mit dem Empfang des Newsletters
          einverstanden sind. Weitere Daten werden nicht bzw. nur auf
          freiwilliger Basis erhoben. Diese Daten verwenden wir ausschließlich
          für den Versand der angeforderten Informationen und geben diese nicht
          an Dritte weiter. Die Verarbeitung der in das
          Newsletteranmeldeformular eingegebenen Daten erfolgt ausschließlich
          auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Die
          erteilte Einwilligung zur Speicherung der Daten, der E-Mail-Adresse
          sowie deren Nutzung zum Versand des Newsletters können Sie jederzeit
          widerrufen, etwa über den "Austragen"-Link im Newsletter. Die
          Rechtmäßigkeit der bereits erfolgten Datenverarbeitungsvorgänge bleibt
          vom Widerruf unberührt. Die von Ihnen zum Zwecke des Newsletter-Bezugs
          bei uns hinterlegten Daten werden von uns bis zu Ihrer Austragung aus
          dem Newsletter gespeichert und nach der Abbestellung des Newsletters
          gelöscht. Daten, die zu anderen Zwecken bei uns gespeichert wurden
          bleiben hiervon unberührt.
          <h2>5. Plugins und Tools</h2>
          <p>
            Soweit Sie Ihre Einwilligung erklärt haben, wird auf dieser Website
            Google Analytics eingesetzt, ein Webanalysedienst der Google Ireland
            Limited (&bdquo;Google&ldquo;). Die Nutzung umfasst die Betriebsart
            &bdquo;Universal Analytics&ldquo;. Hierdurch ist es möglich, Daten,
            Sitzungen und Interaktionen über mehrere Geräte hinweg einer
            pseudonymen User-ID zuzuordnen und so die Aktivitäten eines Nutzers
            geräteübergreifend zu analysieren.
          </p>
          <p>
            Google Analytics verwendet sog. &bdquo;Cookies&ldquo;, Textdateien,
            die auf Ihrem Computer gespeichert werden und die eine Analyse der
            Benutzung der Website durch Sie ermöglichen. Die durch das Cookie
            erzeugten Informationen über Ihre Benutzung dieser Website werden in
            der Regel an einen Server von Google in den USA übertragen und dort
            gespeichert. Im Falle der Aktivierung der IP-Anonymisierung auf
            dieser Website, wird Ihre IP-Adresse von Google jedoch innerhalb von
            Mitgliedstaaten der Europäischen Union oder in anderen
            Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum
            zuvor gekürzt. Wir weisen Sie darauf hin, dass auf dieser Webseite
            Google Analytics um eine IP-Anonymisierung erweitert wurde, um eine
            anonymisierte Erfassung von IP-Adressen (sog. IP-Masking) zu
            gewährleisten. Die im Rahmen von Google Analytics von Ihrem Browser
            übermittelte IP-Adresse wird nicht mit anderen Daten von Google
            zusammengeführt. Nähere Informationen zu Nutzungsbedingungen und
            Datenschutz finden Sie unter{' '}
            <a
              href="https://www.google.com/analytics/terms/de.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.google.com/analytics/terms/de.html
            </a>{' '}
            bzw. unter{' '}
            <a
              href="https://policies.google.com/?hl=de"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://policies.google.com/?hl=de
            </a>
            .
          </p>
          <p>
            <strong>Zwecke der Verarbeitung</strong>
            <br />
            Im Auftrag des Betreibers dieser Website wird Google diese
            Informationen benutzen, um Ihre Nutzung der Website auszuwerten, um
            Reports über die Websiteaktivitäten zusammenzustellen und um weitere
            mit der Websitenutzung und der Internetnutzung verbundene
            Dienstleistungen gegenüber dem Websitebetreiber zu erbringen.
          </p>
          <p>
            <strong>Rechtsgrundlage</strong>
            <br />
            Die Rechtsgrundlage für den Einsatz von Google Analytics ist Ihre
            Einwilligung gemäß{' '}
            <a
              href="https://dsgvo-gesetz.de/art-6-dsgvo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Art. 6 Abs. 1 S.1 lit. a DSGVO
            </a>
            .
          </p>
          <p>
            <strong>Empfänger / Kategorien von Empfängern</strong>
            <br />
            Der Empfänger der erhobenen Daten ist Google.
          </p>
          <p>
            <strong>Übermittlung in Drittstaaten</strong>
            <br />
            Die personenbezogenen Daten werden unter dem EU-US Privacy Shield
            auf Grundlage des Angemessenheitsbeschlusses der Europäischen
            Kommission in die USA übermittelt. Das Zertifikat können Sie{' '}
            <a
              href="https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI"
              target="_blank"
              rel="noopener noreferrer"
            >
              hier
            </a>{' '}
            abrufen.
          </p>
          <p>
            <strong>Dauer der Datenspeicherung</strong>
            <br />
            Die von uns gesendeten und mit Cookies, Nutzerkennungen (z. B.
            User-ID) oder Werbe-IDs verknüpften Daten werden nach 14 Monaten
            automatisch gelöscht. Die Löschung von Daten, deren
            Aufbewahrungsdauer erreicht ist, erfolgt automatisch einmal im
            Monat.
          </p>
          <p>
            <strong>Betroffenenrechte</strong>
            <br />
            Sie können Ihre Einwilligung jederzeit mit Wirkung für die Zukunft
            widerrufen, indem Sie die Speicherung der Cookies durch eine
            entsprechende Einstellung Ihrer Browser-Software verhindern; wir
            weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls
            nicht sämtliche Funktionen dieser Website vollumfänglich werden
            nutzen können.
          </p>
          <p>
            Sie können darüber hinaus die Erfassung der durch das Cookie
            erzeugten und auf Ihre Nutzung der Website bezogenen Daten (inkl.
            Ihrer IP-Adresse) an Google sowie die Verarbeitung dieser Daten
            durch Google verhindern, indem Sie das{' '}
            <a
              href="https://tools.google.com/dlpage/gaoptout?hl=de"
              target="_blank"
              rel="noopener noreferrer"
            >
              Browser-Add-on
            </a>{' '}
            herunterladen und installieren. Opt-Out-Cookies verhindern die
            zukünftige Erfassung Ihrer Daten beim Besuch dieser Website. Um die
            Erfassung durch Universal Analytics über verschiedene Geräte hinweg
            zu verhindern, müssen Sie das Opt-Out auf allen genutzten Systemen
            durchführen. Wenn Sie hier klicken, wird das Opt-Out-Cookie gesetzt:{' '}
            <br />
            <Button secondary onClick={stopGoogleAnalytics}>
              Google Analytics deaktivieren
            </Button>
          </p>
          Quelle: e-recht24.de
        </FormattedHtml>
      </Content>
    </Page>
  )
}
