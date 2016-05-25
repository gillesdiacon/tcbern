<?php

use TcBern\Model\Internationalisation;

/**
 * Seed template for use with "novice"
 */
class InternationalisationSeed {
    function createAndSaveInternationalisation($key, $fr, $de, $en) {
        $internationalisation = new Internationalisation;
        $internationalisation->key = $key;
        $internationalisation->fr = $fr;
        $internationalisation->de = $de;
        $internationalisation->en = $en;
        $internationalisation->save();
        
        return $internationalisation;
    }
    
    function run() {
        // Menu
        $this->createAndSaveInternationalisation("MENU_INFO", "Infos", "Nachrichten", "Info");
        $this->createAndSaveInternationalisation("MENU_AGENDA", "Agenda", "Agenda", "Agenda");
        $this->createAndSaveInternationalisation("MENU_TRAINING", "Entrainement", "Training", "Training");
        $this->createAndSaveInternationalisation("MENU_MEMBERS", "Membres", "Mitglieder", "Members");
        $this->createAndSaveInternationalisation("MENU_ACCOUNT", "Mes Données", "Meine Daten", "My Data");
        $this->createAndSaveInternationalisation("MENU_CONTACT", "Contact", "Kontakt", "Contact");
        $this->createAndSaveInternationalisation("MENU_LOGIN", "Login", "Login", "Login");
        
        // Positions
        $this->createAndSaveInternationalisation("position.member", "Membre", "Mitglied", "Member");
        $this->createAndSaveInternationalisation("position.committee", "Membre du comité", "Vorstandmitglied", "Committee");
        $this->createAndSaveInternationalisation("position.committee.president", "Président", "Präsident", "President");
        $this->createAndSaveInternationalisation("position.committee.vicePresident", "Vice Président", "Vizepräsident", "Vice President");
        $this->createAndSaveInternationalisation("position.committee.eventManager", "Organisation d'événement", "Event Manager", "Event Manager");
        $this->createAndSaveInternationalisation("position.committee.treasurer", "Caissier", "Kassier", "Treasurer");
        $this->createAndSaveInternationalisation("position.committee.secretary", "Secrétaire", "Sekretär", "Secretary");
        $this->createAndSaveInternationalisation("position.tournamentManager", "comité du tournoi", "Turniervorstand", "Tournament Manager");
        $this->createAndSaveInternationalisation("position.webManager", "Webmaster", "Webmaster", "Webmaster");
        
        // Identity fields
        $this->createAndSaveInternationalisation("IDENTITY_FIRSTNAME", "Prénom", "Vorname", "Firstname");
        $this->createAndSaveInternationalisation("IDENTITY_LASTNAME", "Nom", "Name", "Lastname");
        $this->createAndSaveInternationalisation("IDENTITY_EMAIL", "Email", "Email", "Email");
        $this->createAndSaveInternationalisation("IDENTITY_BIRTHDAY", "Date de naissance", "Geburtsdatum", "Birthday");
        $this->createAndSaveInternationalisation("IDENTITY_STREETNUMBER", "Numéro", "Nummer", "Number");
        $this->createAndSaveInternationalisation("IDENTITY_STREET", "Rue", "Strasse", "Street");
        $this->createAndSaveInternationalisation("IDENTITY_STREET2", "Rue 2", "Strasse 2", "Street 2");
        $this->createAndSaveInternationalisation("IDENTITY_ADDRESS", "Adresse", "Adresse", "Address");
        $this->createAndSaveInternationalisation("IDENTITY_POSTCODE", "Code postal", "Postleitzahl", "Postcode");
        $this->createAndSaveInternationalisation("IDENTITY_CITY", "Ville", "Stadt", "City");
        $this->createAndSaveInternationalisation("IDENTITY_COUNTRY", "Pays", "Land", "Country");
        $this->createAndSaveInternationalisation("IDENTITY_PHONE", "Téléphone", "Telefon", "Phone");
        $this->createAndSaveInternationalisation("IDENTITY_MOBILE", "Mobile", "Handy", "Mobile");
        
        // Titles
        $this->createAndSaveInternationalisation("TITLE_INFO", "Informations", "Nachrichten", "Info");
        $this->createAndSaveInternationalisation("TITLE_INFO_DETAIL", "Information Détail", "Nachrichtsdetail", "Info Detail");
        $this->createAndSaveInternationalisation("TITLE_AGENDA", "Agenda", "Agenda", "Agenda");
        $this->createAndSaveInternationalisation("TITLE_MEMBERS", "Membres", "Mitglieder", "Members");
        $this->createAndSaveInternationalisation("TITLE_MEMBERS_DETAIL", "Membre Détail", "Mitgliedsdetail", "Member Detail");
        $this->createAndSaveInternationalisation("TITLE_COMMITTEE", "Comité", "Vorstand", "Committee");
        $this->createAndSaveInternationalisation("TITLE_TRAINING", "Entrainements", "Training", "Training");
        $this->createAndSaveInternationalisation("TITLE_ACCOUNT", "Mes Données", "Meine Daten", "My Data");
        $this->createAndSaveInternationalisation("TITLE_LOGIN", "Login", "Login", "Login");
        
        // Buttons, Fields, Views, etc.
        $this->createAndSaveInternationalisation("INFO_DETAIL_CLOSE", "Fermer", "Schliessen", "Close");
        $this->createAndSaveInternationalisation("INFO_DETAIL_OPEN", "Plus...", "Mehr...", "More...");
        $this->createAndSaveInternationalisation("BTN_LOGIN", "LogIn!", "LogIn!", "LogIn!");
        $this->createAndSaveInternationalisation("LOGIN_USERNAME", "Nom d'utilisateur", "Benützername", "Username");
        $this->createAndSaveInternationalisation("LOGIN_PASSWORD", "Mot de passe", "Passwort", "Password");
        $this->createAndSaveInternationalisation("LOGIN_PASSWORD_REPEAT", "Répéter le mot de passe", "Passwort wiederholen", "Repeat the password");
        $this->createAndSaveInternationalisation("BTN_LOGOUT", "LogOut!", "LogOut!", "LogOut!");
        $this->createAndSaveInternationalisation("BTN_SAVE", "Enregistrer", "Speichern", "Save");
        $this->createAndSaveInternationalisation("CONTACT_H1", "Contact", "Kontakt", "Contact");
        
    }
}
