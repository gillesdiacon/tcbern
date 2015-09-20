<?php

use TcBern\Model\Info;

/**
 * Seed template for use with "novice"
 */
class InfoSeed {
    function createAndSaveInfo($date, $title, $content) {
        $info = new Info;
        $info->title = $title;
        $info->content = $content;
        $info->date = $date;
        $info->save();
        
        return $info;
    }

    function run() {
        $this->createAndSaveInfo(mktime(0, 0, 0, 8, 22, 2014), "Einige Infos", "Liebe Tchoukers,
    
Hier noch einige Infos:

- Das TchoukUp wird in Zukunft an alle Mitglieder des TCBe per Mail versendet. So können wir dem Verband helfen, etwas Geld zu sparen.
- Am Dienstag wird neu Fussball von 19:45 - 20:00 Uhr gespielt. Das Tchoukball-Training beginnt um 20:00 Uhr.
- Die HV findet am 25. Oktober im Häuschen vom letzten Jahr im Steinhölzli statt. Falls jemand bereits einen Vorschlag für die HV hat, darf er dies gerne bereits jetzt an vorstand@tcbern.ch senden.
- Falls jemand Interesse hat, den 12 Deutschen Teilnehmer unseres Turniers am 13.9. am Abend die Stadt Bern zu zeigen, soll er/sie sich bitte bei Torsten melden.
- Bitte das Doodle aktualisieren [http://doodle.com/dppxhuywr26vcxhc](http://doodle.com/dppxhuywr26vcxhc)");

        $this->createAndSaveInfo(mktime(0, 0, 0, 8, 22, 2014), "Turnier 2014", "Das Tchoukball Turnier in Bern findet auch dieses Jahr wieder statt. Mehr Infos unter TURNIER");
        
        $this->createAndSaveInfo(mktime(0, 0, 0, 9, 18, 2014), "Turnier 2014 (bis)", "Am 13. September hat das dritte Turnier des TCBern in der Sporthalle des Neufeld-Gymnasiums stattgefunden. Mit 12 Manschaften, deren 2 aus Deutschland, schönem Wetter und einer super Stimmung waren alle Bedingungen dabei, um ein erfolgreiches Fest und Turnier zu haben.

Resultat:

* Chambésy Panthers
* Vernier
* Chavannes
* TchoukballA.D.E
* Morges
* Bern
* Sion
* Jubiläum
* Val de Ruz
* SG Urbich Männer
* Neuchâbourg
* SG Urbich Damen");
        
        $this->createAndSaveInfo(mktime(0, 0, 0, 10, 5, 2014), "Meisterschaft - 1. und 2. Match", "Zwei Matchs - zwei Siege. Die Saison 2014-2015 hätte kaum besser starten können. Wir müssen aber zum 23. September, dem ersten Match, zurückkommen. Vor dem Spiel war eine gewisse Nervosität vorhanden, da Sion die Meisterschaft 2013-2014 auf dem ersten Platz abgeschlossen hatte. Das erste Drittel im Match gegen Sion war ziemlich ausgeglichen. Bern konnte mit einem leichten Vorsprung von zwei Punkten, in Führung gehen. Während des zweiten Drittels hat Bern seine Verteidigung stark verbessert und Sion hatte kaum eine Chance gehabt, den Score noch aufzuholen. Das dritte Drittel war gut gespielt und dank einigen Fehlern von Sion, konnte Bern den Match mit 16 Punkten Vorsprung gewinnen (81-65). Dieser Match hat in Vergleich zur letzten Saison und trotz  der vielen Verletzten gezeigt, dass Bern auch gegen gute Mannschaften stabil spielen kann.

Zwischen diesem ersten Match und dem Zweiten (30.09) haben die Spieler, dank einen Anlass Val de Travers, die Batterie wieder füllen können. Beim zweiten Match war Morges als Gastteam in der Schosshalde. Auf dem Matchblatt ist Morges weniger stark als Sion, aber darf absolut nicht unterschätzt werden. Deshalb hat Bern Vollgas gestartet und konnte einen guten Vorsprung nach dem ersten Drittel herausholen. Die Stabilitätsschwierigkeiten waren wieder da, konnten aber relativ gut beiseite gestellt werden, wodurch Bern die Führung den ganzen Match gehalten hat. Der Finale Score: 61-45. Dieser Match zeigt einige Punkte auf, die verbessert werden können, aber hat auch einen guten Teamgeist, sowie Reaktionen in schwierigen Momenten gezeigt und ist für die zukünftigen Matchs aussichtsvoll.

Nächstes Spiel: 7. November in Carouge (GE)

Nächstes Heimspiel: 18. November mit Chavannes in Schosshalde");
        
        $this->createAndSaveInfo(mktime(0, 0, 0, 10, 6, 2014), "Vereinsreise 2014 - Val de Travers", "Bereits zum dritten Mal lockte uns ein internes Planungsteam hinaus, um während zwei Tagen ein unter Verschluss gehaltenes Programm/Ausflug zu unternehmen. Dieses Jahr folgten wir den Reiseleitern Thorsten und Miri ins Ungewisse. Mit Rucksack und Pack führte uns Thorsten (Miri konnte krankheitshalber nicht dabei sein) via Neuchâtel ins Val de Travers.

Highlights

- E-Biketour auf den Creux du van
- Schoggidegustation in Noiraigue
- Môtiers – deine Häuser sind ein Augenschmaus
- Maison de l’absinthe à Môtiers
- Saucisse neuchâtelois  orginal im Feuer und Schoggibanane
- Wellness à Couvet
- Féeline mit Trottiabfahrt und Rodelbahn in Buttes
- Fête des vendanges à Neuchâtel mit Feuerwerk und Rummelplatz

Lowlights

- Absinthedegustation
- Wer ist Päscu? Niemand wusste es und mit Rateglück war er auch nicht gerade gesegnet. Aber: Vielen Dank für das neue Spiel!
- No Miri!
- Für den Kaffee mussten immer erst noch die Bohnen geröstet und gemahlen werden.

Wermutstropfen (nein, der andere): Ein Wiedersehen mit dem Val de Travers gibt es im nächsten Jahr, wenn es wieder heisst: Tchoukfahrt! Dann können wir auch noch die richtig coolen Sachen im Tal erleben: Dampfbahnfahrt, Fahrt im historischen Zug ;-)");
        
        $this->createAndSaveInfo(mktime(0, 0, 0, 10, 29, 2014), "Hauptversammlung", "Am Samstag, 25. Oktober 2014 hat die Hauptversammlung des Klubs stattgefunden. Nach einem Rückblick auf das vergangene Jahr (sportlich und administrativ) wurde das kommende Jahr präsentiert. Auf der sportlichen Seite sind ein Trainingsweekend (1. und 2. November in Mürren), die Meisterschaft und verschiedene Turniere im Tätigkeitsprogramm.

Im Vorstand gab es leichte personelle Veränderungen. Patrick Salzmann ist als Sekretär aus dem Vorstand zurückgetreten. Der Vorstand sowie der ganze Klub dankt ihm ganz herzlich für seinen Einsatz und seine ganze Arbeit. Er bleibt im Klub aktiv als Spieler und hilft uns im Sponsoring. Daniel Jost ersetzt Patrick als Sekretär. Der Vortand begrüsst ihn herzlich und wünscht ihm einen guten Start. Vielen Dank Dänu.");
        
        $this->createAndSaveInfo(mktime(0, 0, 0, 11, 6, 2014), "Trainingsweekend des Tchoukballclubs Bern 2014", "Seit Wochen wurde organisiert. Am 1.11.14 war es soweit. Das Tchoukballtraining in Mürren stand vor Tür, beziehungsweise am Berg. Mit ÖV und PW’s ging es am Morgen früh von Bern Richtung Oberland. Die Autos wurden auf dem „Gratisparkplatz“ abgestellt (danke Dänu für den Tipp), das Gepäck in die Mulde verladen und dann ging es mit der Seilbahn und dem Grütschbähnli auf nach Mürren. Die Halle wurde bezogen und eingerichtet. Dann wartete die PW-Truppe auf die ÖVler. Ihre Fahrt verlief ohne grössere Zwischenfälle, ausser, dass Zeno in Interlaken West ausstieg und mit seinem Interlakenfahrrad nach Wilderswil radelte, um dort wieder in den Zug einsteigen zu können... Zum Glück reichte es. =)

Ein wenig verspätet starteten wir dann mit dem Warmup. Diverse Übungen wurden durchgeführt und im kurzen Spiel vor dem Mittag umgesetzt. Das Mittagsmenu in unserer Unterkunft namens Sportchalet war der Hammer. Es gab ein grosses Salatbuffet und danach Cannellonis. Nach einer kurzen Mittagspause, in der die Zimmer bezogen wurden, ging das Training um 13.45Uhr weiter. Ein kurzer Verdauungscircuit von Ädu und Pädu warteten auf uns. Mit einem Gudi kürten sie die Person, die am meisten schwitzte und diejenige, die am seriösisten dreinschauten... Ueli und Rahel lassen danken. Danach wurden Pass-, Angriffs- und Verteidigungsübungen durchgeführt, die, wie bereits am Morgen, gefilmt  wurden. Die Sonnenpause stand leider erst an, als die Sonne bereits hinter allen Bergen war... Mit einem Unihockeymatch endete der Trainingsteil. 

Zum Nachtessen gab es Salatbuffet, Schnitzel und Countrycuts. Da sämtliche Bars in der Zwischensaison geschlossen sind, landeten wir nach einem Verdauungsspaziergang wieder im Sportchalet zum Schlumi. Meiern mit dem I-Phone wurde gespielt. Nach Bärnerroseöpfubrand und Suser gingen wir ab gogen pfusen... =)

Nach einem super Frühstücksbuffet gingen wir pünktlich, begleitet vom „Sonnenaufgang in Mürren“, in die Turnhalle. Ädu führte mit allen ein Outdoorcircuit durch. Eine gute halbe Stunde wurde gejoggt, gedehnt und gekräftigt. Danach wurden in Gruppen Spielzüge erfunden und entwickelt. Wir stellten uns diese gegenseitig vor und versuchten die Schemas im Match vor dem Mittag umzusetzen.

Für das Mittagessen gingen wir zum letzten Mal zurück zur Unterkunft. Es gab wieder Salat und Tomatenrisotto. Nach dem Kaffe auf der Sonnenterasse ging es zurück in die Halle. Mit einem Kräftigungsteil in Form von Teambildung starteten wir in den Nachmittag. Wir wärmten mit Pässen ein und wiederholten danach die Angriffsübungen vom Vortag, damit wir unsere Erkenntnisse aus der Videoalalyse umsetzen konnten. Auch die Schemas wurden nochmals gefestigt. Mit einem intensiven Spiel und dem individuellen Cooldown  liessen wir das sportliche und sonnige Wochenende in den Bergen ausklingen.

Die ÖVler huschten zügig ab, damit sie den Anschluss erwischten. Die PWler wurden mit einer Busse beschenkt und machten sich eine halbe Stunde später auf den Heimweg. Ein grosses Dankeschön geht an alle, die organisiert, geleitet, gefilmt und mitgemacht haben!

Toll war’s!

P.S. Statements des Wochenendes:

- Mer wie aber nd üsi Spielwis de inkompetente Schiris apasse, oder?
- De längts ja ned mau zom Äliäli mache...
- D’Ussecht esch scho schön. Wär cool, we sie chli er Region wär...");
        
        $this->createAndSaveInfo(mktime(0, 0, 0, 11, 12, 2014), "Carouge - Bern 7. November", "Am Freitag 7. November war das Team unterwegs nach Genf um den Match gegen Carouge zu spielen. Carouge hat zuletzt in der vorletzten Saison an der Meisterschaft teilgenommen und dabei die beiden Spiele gegen Bern gewonnen. Das Team war voll motiviert diese Serie zu beenden. Der Anfang des Spiels missriet Bern allerdings, was dazu führte, dass Carouge nach 10 Minuten mit 6 Punkten in Führung lag. Das Team ist aber ruhig geblieben und hat geduldige seine Fehler korrigiert und die Spielqualität verbessert. So gelang es bis zur ersten Pause, das Score auf 17-17 auszugleichen. Im zweiten Abschnitt fuhr das Team dort weiter, wo es zuvor aufgehört hatte und lies Carouge keine Chance. So ging der zweite Abschnitt mit 21-11 deutlich an Bern. Der gute zweite Abschnitt hat den Bernern viel Luft gegeben, so dass sie im letzten Abschnitt ruhig agieren konnten, bis schlussendlich der erste Sieg gegen Carouge fest stand. Gratulation an alle. Endresultat: Bern gewinnt 61-49.");
        
        $this->createAndSaveInfo(mktime(0, 0, 0, 11, 24, 2014), "Bern - Chavannes 18. November", "Am Dienstag, 18. November 2014 empfing der Tchoukball Club Bern die Gäste aus Chavannes. In der vergangenen Saison lag Chavannes knapp einen Platz hinter den Bernern. Es durfte also ein spannendes Spiel erwartet werden. Bereits nach den ersten Minuten zeigte sich aber, dass die Berner auf ein besser eingestelltes Team zurück greifen konnten und beendeten das erste Drittel mit einer klaren Führung. Auch im zweiten Drittel liessen die Berner nichts anbrennen und dominierten das Spiel weiterhin, trotz einigen Fehlpässen. Dafür glänzte das Team mit vielen sackstarken Verteidigungen, welche diese Ballverluste wieder wettmachten. Chavannes war ohne Ersatz-Spieler angereist, was sich im letzten Drittel weiter negativ auf die Konstanz der Gäste auswirkte. Infolge der Dominanz genehmigte sich das Heimteam zunehmend weitere Fehler. Fast die Hälfte der Chavannes-Punkte kamen durch verlorene Punkte der Berner zustande. Dennoch entschieden die Berner dank einer starken und konstanten Team-Leistung das Spiel klar mit 66:27 für sich.

Als einzige Mannschaft in der laufenden Saison der Nationalliga B hat Bern noch kein Spiel verloren. Als nächstes muss nun  die aktuelle Form gegen Geneva Keys bewiesen werden. Das Spiel findet am kommenden Dienstag, 25. November 2014 um 20:45 in der Turnhalle Laubegg in Bern statt.");
        
        $this->createAndSaveInfo(mktime(0, 0, 0, 11, 26, 2014), "Bern - Geneva Keys 25. November", "Genau eine Woche nach dem letzten Match waren die Spielerinnen und Spieler vom TCBe wieder im Einsatz. Dieses Mal war das Team \"Geneva Keys\" nach Bern gereist.

Die Partie begann mit starken Verteidigungsaktionen von beiden Teams. Erst der 6. Angriff brachte den ersten Punkt, erzielt durch den TCBe.  Mit einer sehr konzentrierten Leistung im ersten Satz konnten die Berner diesen mit 20-10 für sich entscheiden. Die Verteidigung klappte von Beginn an. Im Angriffsspiel wurden die Berner mit zusätzlicher Matchdauer sicherer und auch etwas experimentierfreudiger, was dann auch einige Punkte für den Gegner im zweiten Drittel zur Folge hatte. Dieses konnte der TCBe schliesslich mit 22-10 für sich entscheiden. Im letzten Drittel war zu spüren, dass der Sieg nicht mehr zu nehmen ist. Entsprechend wurde nicht mehr mit der letzten Konsequenz gespielt. Als Folge daraus war das Resultat des letzten Drittels mit 16-12 etwas enger als zuvor, obschon die Genfer nur zu sechst spielen konnten.

Die Partie war von den beiden Schiris G. Diacon und A. Fuchser souverän geleitet worden. Wir gratulieren A. Fuchser zu seiner verdienten Beförderung zum Schiri II. Es war ein sehr faires und interessantes Spiel.");
        
        $this->createAndSaveInfo(mktime(0, 0, 0, 1, 26, 2015), "3 Spiele in 2 Tagen", "Das Meisterschaftsteam hat letzte Woche viel zu tun gehabt, nämlich drei Spiele in zwei Tagen. Es hat noch eine zusätzliche Schwierigkeit gegeben, da kein Spiel in Bern stattgefunden hat. Das Team musste also viel reisen.

** Val-de-Ruz 2 - TC Bern: 50 - 60 **
Das erste Spiel hat am Freitag, den 23. Januar in Val-de-Ruz stattgefunden und dort ist es immer schwierig, da die Halle sehr gross ist. Es macht jeden Punkt anstregender und erfordert eine höhere Präzision im Passspiel als in einer kleinen Halle. Nachdem Val-de-Ruz das erste Drittel gewonnen hatte, hat Bern sein Spielniveau erhöht und die Anzahl Fehler reduziert. Am Ende des Matchs war Bern 10 Punkte im Vorsprung (60-50), aber während des Spiels war das Niveau ähnlich und Bern musste sich Mühe geben um die Entscheidung zu forcieren.

Einen Tag später haben sich die Spieler von Bern um 08:30 im Zug nach Nyon getroffen. Zwei schwierige Spiele warteten auf die Berner, da die zwei Gegner um einen Platz in den fünf ersten der Meisterschaft kämpfen. Pyranyon Fusion und Genève Espoir haben zuerst gegeneinander gespielt. Das Spiel endete mit einem Sieg von Pyranyon in den letzten Minuten.

** Genève Espoir - TC Bern: 58 - 63 **
Die Halle war kleiner als in Val-de-Ruz, aber komisch beleuchtet, da sich die Sonne auf dem Boden der Halle gespiegelt hat. Das sehr hohe Angriffsniveau sowie die hohe Geschwindigkeit des Spiels haben die Arbeit der Verteigidiger sehr schwierig gemacht. Das Endergebnis widerspiegelt diesen Fakt.

Bern hat seinen Sieg im zweiten Drittel mit einem hohen Tempo sowie guten Verteidigungen lanciert. Im dritten Drittel hat Bern das Tempo nicht verlangsamt, da Genève sich Mühe gegeben hat, um wieder an die Punktzahl heran zu kommen. In diesem Spiel war jede Verteidigung extrem kostbar und jeder Fehler wurde mit einem Punkt bestraft. Bern hat dann dank zwei verrückten letzten Minuten seinen zweiten Sieg der Woche zelebriert.

** TC Bern - Pyranyon Fusion: 61 - 50 **
Ganz müde, aber sehr motiviert ist Bern in das dritte Spiel gestartet. Die Ziele dieses Spiels waren vor allem: Spass, Konzentration und keine Verletzungen. Wie erwartet, war das Spiel schwierig, da das andere Team ein sehr gutes Niveau im Angriff sowie in der Verteidigung hatte. Bern ist dann wie in den zwei letzten Spielen gestartet und war eifrig. Trotz eines guten Starts des anderen Teams blieb Bern konzentriert und liess sich nicht aus der Ruhe bringen . Das Spiel wurde noch schwieriger, als zwei der zehn Spieler nach dem zweiten Drittel nicht mehr spielen konnten. Die Berner sind, trotz dieser Probleme, ruhig geblieben und konnten den Vorsprung sicherstellen.

Eine Siegquote von 100% an diesen zwei Tagen hatte man sich erhofft, aber diese war sehr schwierig zu erreichen. Gratulation an alle für die super Leistung und den Spass am Spielen!");
        
        $this->createAndSaveInfo(mktime(0, 0, 0, 2, 10, 2015), "TCBe Skiweekend", "Schon lange hatten wir uns auf das traditionsreiche TCBE-Skiweekend in Saanenmöser gefreut, das am letzten Wochenende im Januar stattfinden sollte. Entsprechend gross war unsere Enttäuschung, als uns der Wetterbericht für die Wochenendtage zu Augen und Ohren kam. Die Meteorologen prophezeiten Unmengen von Schnee und eisige Temperaturen, aber keinen Sonnenschein. In Anbetracht dieser tristen Aussichten bekam manch eine/r kalte Füsse, und es wurde gar erwogen, das Skiweekend abzublasen. Letztendlich besannen wir uns aber auf unsere Nehmerqualitäten und machten uns am Samstagmorgen in aller Frühe auf die Socken in die Berner Alpen. Unsere Risikobereitschaft sollte sich auszahlen …

In Saanenmöser angekommen stellten wir verwundert fest, dass der Wetterbericht von SRF1 für Pauschalbesteuerte keine Gültigkeit hat. Es war zwar kalt, aber der Himmel war strahlend blau und dem Hundsrügg lachte bereits die Sonne ins Gesicht. Das frühe Aufstehen hatte sich also definitiv gelohnt, denn wir fanden nicht nur ideale Wetter- und Pistenbedingungen vor, sondern hatten die Pisten auch praktisch für uns alleine. Offensichtlich hatten sich selbst die Hartgesottenen unter den Schneesportlern vom schlechten Wetterbericht abschrecken lassen und sich fürs Ausschlafen entschieden. Somit profitierten wir letztendlich von den garstigen Prognosen, die uns wenige Tage zuvor noch Sorgen bereitet hatten. Dies stimmte uns versöhnlich und wir entschlossen uns letztendlich unsere Drohbriefe an die Wetterredaktionen einschlägiger Fernsehsender und Zeitschriften doch nicht abzuschicken.

Übermütig tollten wir den ganzen Vormittag im Schnee herum. Besonders bunt trieb es Sebi, der uns seinen neusten Trick vorführte, den „Teuscher-Flip“. Bei diesem technisch äusserst anspruchsvollen Sprung vollzieht man eine halbe Drehung um die eigene Körperachse und zieht dabei die Skier aus. Die Landung ist dementsprechend schwierig! Nach einigen Abfahrten kehrten wir in der Hamilton Lodge ein, wo sich manche am nicht vorhandenen Besteck störten, während sich andere über den nicht bestellten Kaffee mit Schnaps freuten.

Nach der Mittagspause wurde bald klar, dass die Sonne auch in Saanenmöser nicht immer scheint. Es zogen doch noch Wolken auf und allmählich fielen dann auch erste Schneeflocken. Trotzdem wagten wir noch eine letzte Fahrt, bevor wir uns fürs wohlverdiente Après-Ski in die Euter-Bar begaben. Dort verweilten wir aber nicht lange, denn wir verspürten alle Stalldrang. Nach einem kalten Bier unter der warmen Dusche machten wir uns auf zu unserer geliebten Unterkunft, wo Ädu bereits eine Schneebar für uns gebaut hatte.

Der Abend verlief dann in den gewohnten Bahnen. Nach viel Fondue, einer denkwürdigen Tanzeinlage auf der Schneebar und diversen Spielen machten sich irgendwann zu später Stunde die letzten auf ins Bett. Manche waren so müde, dass sie sich gar nicht mehr die Mühe machen wollten, in eines der freien Betten zu steigen, sondern ihr Nachtlager lieber gleich am Boden aufschlugen. Am nächsten Morgen zeigte sich, dass nicht alle die Nacht schadlos überstanden hatten. Ein paar arme Seelen waren vom Fondue schwer gezeichnet. Manche argwöhnten, dass den Betroffenen die Mischung moitié-moitié schwer auf dem Magen liege. Andere vermuteten, dass das Dessert wohl des Guten zu viel gewesen sei. Ein besonders kritischer Zeitgenosse wollte zudem ganze Knoblauchzehen im Caquelon schwimmen gesehen haben, denen er eine unheilvolle Wirkung zuschrieb. Was immer der Grund für die Magenverstimmungen gewesen sein mag - wir werden ihn wohl nie erfahren.

Auf die Piste wollte sich am Sonntag keiner mehr wagen, weshalb wir uns nach dem Frühstück bereits wieder auf den Nachhauseweg machten. Dank geht an Michelle fürs Organisieren, an Gilles fürs Einkaufen und an Ädu für die Bereitstellung der Unterkunft und natürlich an S.T. aus B., der die Stimmung noch einmal so richtig anheizte, als die ersten schon ins Bett gehen wollten.");
        
        $this->createAndSaveInfo(mktime(0, 0, 0, 2, 23, 2015), "Bern - La Tchaux 17. Februar", "Am Dienstag hiessen wir La Tchaux in Bern Willkommen. Vor dem Spiel wurden sehr spontan ein Punktezähler Organisiert, an dieser stelle vielen dank an die Helferin.

Das Spiel lief von Anfang an gut für uns und wir konnten früh ihn Führung gehen. Auch durch kleinere Tiefs im Spielverlauf konnte die Führung erhalten werden. Was am Schluss zu einem Sieg für den TcBe führte.

Somit konnten alle Spiele ihn der Vorrunde gewonnen werden. Jetzt fangen die Vorbereitungen für die Rückrunde an auf die wir uns alle freuen.");
        
        $this->createAndSaveInfo(mktime(0, 0, 0, 5, 18, 2015), "Chavannes - TC Bern 29. April", "Da die Meisterschaft alles andere als fertig ist und noch einige Wochen dauert, musste das Team seine gesamte Energie wieder hochfahren. Dies war nach der langen Osterpause nicht gerade eine einfache Aufgabe.

Am 29. April war das Rückrunde-Spiel gegen Chavannes angesagt. Es war erst das zweite Spiel der Rückrunde und mussten wir zuerst herausfinden, wo wir nach den langen Ferien stehen. Aufgrund von Absenzen durch Krankheit und Ferien, waren wir zu Beginn nicht genügend Spieler. Erst im letzten Moment war das Team spielbereit. Wir danken deshalb Morgane und Roger für das kurzfristige „Einspringen“.

Um 20 Uhr hat das Spiel mit einigen Schwierigkeiten auf der Bernerseite gestartet. Chavannes hatte sehr gut verteidigt, was die Arbeit für Bern erschwerte. Dies führte zu einem Rückstand von 4 Punkten für Bern am Ende des ersten Satzes. Bern ist trotzdem – wie in den letzten Trainings fleissig geübt – ruhig und konzentriert geblieben und hat von einer schlechteren Phase von Chavannes profitieren können. So lautete der Punktestand am Ende des zweiten Satzes ‚unentschieden‘.  Der letzte Satz war dann wieder extrem spannend; nicht nur für die Spieler sondern auch für die Zuschauer. Die Teams wechselten sich mit einem oder zwei Punkten Vorsprung ständig ab. Die Führung hat bis zu den letzten 30 Sekunden mehrmals hin und her gewechselt. Zu diesem Zeitpunkt war der Skore schliesslich 51-50 für Chavannes. Bern hatte nun Anspiel und erzielte im Angriff einen Punkt.->51-51. Nach einer vorbildhaften und schönen Verteidigung konnte Pascal einen direkten Schuss in die dritte Zone des Spielfelds machen, welcher Chavannes nicht mehr verteidigen konnte. Der Spielstand lautete 51-52 und dies sechs Sekunden vor dem Abpfiff. Chavannes versuchte einen letzten Angriff, welcher Bern verteidigen konnte. Das Schlussresultat war 51-52 und Bern gewann somit dieses extrem spannende und nervenaufreibende Spiel.

- Nächstes Spiel: 6. Mai 2015 in Nyon
- Nächstes Heimspiel: 12. Mai 2015 (Schosshalde)");
        
        $this->createAndSaveInfo(mktime(0, 0, 0, 5, 18, 2015), "Rimini Beachtchoukball Festival 2015", "Auch in diesem Jahr sendet der TCBern wieder eine Fraktion nach Rimini. Zwei Aufklärer haben wir bereits am Mittwoch mit dem Motorrad nach Süden gesandt. Als diese das Wetter als \"Strand-tauglich\" befanden, sind am Freitagmorgen auch die Anderen in Bern in den Zug gestiegen. Erfreulicherweise verlief die Reise ohne Streiks oder Verspätungen. Während der Fahrt wurde tüchtig getichelt und die Kehlen befeuchtet. Die Teams wurden dieses Jahr mittels Glücksfee im Zug ermittelt. In Anlehnung ans Trainingsweekend waren dies \"Blüemlichäuer\" & \"Öpfubrand\". Pünktlich um 14:00 Uhr konnten wir das Hotel beziehen und der Strandsonne frönen. Wie gewohnt gab's bald das erste Gelati. Frisch und schmackhaft wie eh und je. Das Essen im Hotel war wie immer und ist daher weiterer Worte unwürdig. Die Pizzen im Baracuda kombiniert mit den Giraffen konnte dann die Stimmung wieder ordentlich anheben. 

Am nächsten Morgen war es dann soweit. Der Sportliche Teil stand nun im Fokus. Trotz der durch 400m getrennten Spielfelder besichtigten die beiden Teams die Spiele der anderen, wann immer diese nicht mit dem eigenen Spielplan kollidierten. Die beiden Teams schlossen den Samstag auf den Plätzen 3 & 4 ab und konnten dann am Sonntag am Marinagrande auf benachbarten Feldern spielen.

Bevor nun aber wieder der sportliche Teil im Fokus steht, gab es noch Beachvolleyball, Gelati, Antipasti, Bier und Abendessen. Im Baracuda und im Dune wurde der Abend beendet. Der Präsident war fleissig mit networking beschäftigt und hat sich dabei etwas gar verausgabt. Die Müdigkeit - und anderes - steckte ihm am nächsten Morgen in den Knochen, was dann in einer grösseren Verspätung resultierte.

Es gab noch einige spannende Spiele bevor es am Mittag bereits das letzte Menu im Hotel gab. Nach einer abschliessenden Dusche wurden die Aufklärer wieder auf ihre Bikes gesetzt und fuhren innert zwei Tagen zurück. Die anderen genossen noch das letzte Gelati & Espresso bevor die Rückreise nach Bern angetreten wurde. Die gekauften Italienischen Spezialitäten versüssten die Heimfahrt genauso wie die waghalsigen Aktionen beim Tichu spielen.

Dank schönem Wetter und guter Stimmung war auch das diesjährige Rimini Beachtchoukball Festival für die Mitglieder des TCBern ein Erfolg. Auch der Präsident hat sich gut erholt.... Bis zum nächsten Jahr!");
        
        $this->createAndSaveInfo(mktime(0, 0, 0, 6, 4, 2015), "Vernier Turtles - TC Bern", "Nach einem super letzten Spiel in Sion hat der TC Bern die Meisterschaft auf dem zweiten Platz der Rangliste abgeschlossen. Dieses Resultat hat Bern die Chance gegeben, mit den Vernier Turtles die Aufstiegsspiele zu spielen. Deswegen sind acht mutige Berner am Dienstag den 2. Juni nach Vernier gefahren. Dank der sehr heissen lokalen Temperatur hätten die Spieler fast kein Einwärmen gebracht. Pflichtbewusst haben die Berner sich trotzdem ernsthaft eingewärmt, um dieses schwierige Spiel mit Vollgas zu starten. Vernier war leider nicht komplett und hat das ganze Spiel mit nur 6 Spielern gemacht. Am Anfang hat die Berner Verteidigung ein Bisschen Zeit gebracht, um das richtige Tempo zu finden. Der Angriff hat aber gut funktioniert, was zur Folge hatte, dass Bern den ersten Satz mit 5 Punkten Rückstand abgeschlossen hat. Nach einigen kleinen Korrekturen in der Verteidigung hat Bern viel mehr Druck auf die Genfers Angreifer gesetzt. Die Wirkung war, dass Vernier Fehler gemacht und Punkte an Bern abgegeben hat. Plötzlich war Bern nur noch einen Punkt im Rückstand, da es seine Chance genutzt und sehr gut verteidigt hat. Am Ende des Satzes war die Müdigkeit langsam da und Vernier hat davon profitiert, um wieder einige Punkte Vorsprung zu schaffen. Der dritte Satz war für Bern der schwierigste. Vernier hat fast keine Fehler mehr gemacht und es war dann deutlich komplizierter, Punkte zu machen. Dafür hat Bern mehr Risiken nehmen müssen und deswegen mehr Fehler gemacht. Enderesultat: 62-49. Das war für Bern eine super Gelegenheit mit einem Liga A Team zu spielen und Erfahrungen zu sammeln. Danke an allen für dieses super spannende Spiel.

Rückspiel: 9. Juni 20:45 in Bern.");
        
        $this->createAndSaveInfo(mktime(0, 0, 0, 6, 16, 2015), "Saisonabschluss", "Jetzt ist es soweit. Die Saison ist mit einem letzten Aufstiegspiel gegen Vernier abgeschlossen. Dieses zweite Spiel war schwierig und mit dem Hinspiel nicht zu vergleichen, da Vernier mit einer anderen Aufstellung gekommen ist. Trotzdem  hat Bern seine Chance verteidigt und führte nach drei Minuten immer noch mit einem Punkt. Nachher hat Bern mit weniger Passpräzision sowie kleinen Fehlern Vernier geholfen. Gegen solche Teams äussert sich mancher Fehler als gegnerischer Punkt, da die Schüsse des anderen Teams nicht einfach zu verteidigen sind. Am Ende des ersten Satzes hatte Vernier einen grossen Vorsprung geschafft. Im zweiten Satz hat Bern die Verteidigung verbessert und hat kurzfristig seinen Rückstand reduziert. Das war aber  leider nur vorübergehend. Trotz einem verbesserten Niveau im letzten Satz hat Bern das Spiel und die Aufstiegsserie schliesslich verloren. Das Team hat jedoch sein Saisonziel, ein Erreichen der Top-3, erreicht. Herzliche Gratulation!

Jetzt ist es endlich Zeit, die Körper und Muskeln zu erholen. Die Saison war lang und anstrengend. Ein herzlicher Dank an alle Klub-Mitglieder für diese grossartige Saison!");
        
        //$this->createAndSaveInfo("", "");
        
        
        
        
        
        /*$info = new Info;
        $info->title = "#Test Info 1";
        $info->content = "##Subtitle\nThis is my first news\n\n* element 1\n* element 2\n* element 3";
        $info->save();

        $info2 = new Info;
        $info2->title = "Test Info 2";
        $info2->content = "This is my second news";
        $info2->save();*/
    }
}
