const navButtons = document.querySelectorAll(".nav");
const views = document.querySelectorAll(".view");
const signinScreen = document.getElementById("signinScreen");
const appShell = document.querySelectorAll(".app-shell");

function showDemoApp() {
  signinScreen.classList.add("hidden");
  appShell.forEach((item) => {
    item.hidden = false;
  });
}

document.getElementById("signinButton").addEventListener("click", showDemoApp);
document.getElementById("googleSignin").addEventListener("click", showDemoApp);
document.getElementById("microsoftSignin").addEventListener("click", showDemoApp);

navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.dataset.view;
    if (!target) return;

    navButtons.forEach((item) => item.classList.remove("active"));
    views.forEach((view) => view.classList.remove("active"));

    button.classList.add("active");
    document.getElementById(target).classList.add("active");
  });
});

document.getElementById("toggleCommunicate").addEventListener("click", () => {
  const toggle = document.getElementById("toggleCommunicate");
  const group = document.getElementById("communicateGroup");
  const isExpanded = toggle.getAttribute("aria-expanded") === "true";

  toggle.setAttribute("aria-expanded", String(!isExpanded));
  group.classList.toggle("collapsed", isExpanded);
});

document.getElementById("toggleTransaction").addEventListener("click", () => {
  const toggle = document.getElementById("toggleTransaction");
  const group = document.getElementById("transactionGroup");
  const isExpanded = toggle.getAttribute("aria-expanded") === "true";

  toggle.setAttribute("aria-expanded", String(!isExpanded));
  group.classList.toggle("collapsed", isExpanded);
});

const callDetails = {
  succession: {
    title: "Outgoing call - Succession",
    billing: "18 min - billed 0.50 h",
    client: "Amelie Roy",
    number: "514-555-0198",
    contactEmail: "amelie.roy@example.com",
    time: "May 13, 2026 - 10:51",
    direction: "Outgoing",
    email: "Email draft ready: succession checklist for Amelie Roy.",
    transcript: `
      <p><b>NotaVoix:</b> Bonjour, suis-je bien avec Mme Amelie Roy?</p>
      <p><b>Client:</b> Oui, c'est Amelie Roy.</p>
      <p><b>NotaVoix:</b> Merci. Je confirme que ce numero est le 514-555-0198. Je vous appelle au sujet du dossier de succession de votre pere.</p>
      <p><b>Summary:</b> Client identity confirmed, succession documents explained, follow-up email requested.</p>
    `
  },
  successionSofia: {
    title: "Outgoing call - Succession",
    billing: "34 min - billed 0.75 h",
    client: "Sofia Pereira",
    number: "+351 91 555 0184",
    contactEmail: "sofia.pereira@example.com",
    time: "June 10, 2026 - 09:40",
    direction: "Outgoing",
    email: "Email draft ready: remote succession intake for Sofia Pereira.",
    transcript: `
      <p><b>NotaVoix:</b> Bonjour Mme Pereira, je vous appelle au sujet de la succession de Maria Pereira.</p>
      <p><b>Client:</b> Oui, je suis au Portugal et je veux savoir comment envoyer les documents.</p>
      <p><b>NotaVoix:</b> Merci. Je confirme votre courriel sofia.pereira@example.com et je vais vous envoyer le lien securise.</p>
      <p><b>Summary:</b> Remote succession process explained, secure upload link requested, 34 minutes recorded and rounded to 0.75 h.</p>
    `
  },
  successionEstate: {
    title: "Outgoing call - Succession",
    billing: "22 min - billed 0.50 h",
    client: "Estate of Laurent Blais",
    number: "514-555-0162",
    contactEmail: "liquidator.blais@example.com",
    time: "June 9, 2026 - 15:20",
    direction: "Outgoing",
    email: "Email draft ready: liquidator next-step summary.",
    transcript: `
      <p><b>NotaVoix:</b> Bonjour, je fais le suivi avec le liquidateur de la succession Laurent Blais.</p>
      <p><b>Client:</b> Oui, je veux confirmer les prochaines etapes et les documents manquants.</p>
      <p><b>NotaVoix:</b> Je vais resumer les elements requis par courriel et joindre la liste de verification.</p>
      <p><b>Summary:</b> Liquidator follow-up completed, missing documents listed, 22 minutes recorded and rounded to 0.50 h.</p>
    `
  },
  realEstate: {
    title: "Incoming call - Real estate",
    billing: "9 min - no bill",
    client: "Mariana Costa",
    number: "+55 21 5555-0148",
    contactEmail: "mariana.costa@example.com",
    time: "May 13, 2026 - 10:23",
    direction: "Incoming",
    email: "Email draft ready: secure upload link for Mariana Costa.",
    transcript: `
      <p><b>NotaVoix:</b> Bonjour, puis-je avoir votre nom complet avant d'ouvrir le dossier?</p>
      <p><b>Client:</b> Mariana Costa. J'appelle du Bresil pour un achat immobilier a Montreal.</p>
      <p><b>NotaVoix:</b> Merci Mme Costa. Quel courriel devons-nous utiliser pour le suivi?</p>
      <p><b>Client:</b> mariana.costa@example.com.</p>
      <p><b>NotaVoix:</b> Parfait. Je vois votre numero international. Je vais creer une fiche contact et vous envoyer les prochaines etapes par courriel.</p>
      <p><b>Summary:</b> International client captured, real estate intake started, email follow-up required.</p>
    `
  },
  testament: {
    title: "Incoming call - Testament & Mandate",
    billing: "12 min - no bill",
    client: "Claire Bouchard",
    number: "438-555-0109",
    contactEmail: "claire.bouchard@example.com",
    time: "May 13, 2026 - 09:48",
    direction: "Incoming",
    email: "Email draft ready: testament and mandate appointment checklist.",
    transcript: `
      <p><b>NotaVoix:</b> Bonjour, puis-je avoir votre nom complet?</p>
      <p><b>Client:</b> Claire Bouchard.</p>
      <p><b>NotaVoix:</b> Merci Mme Bouchard. Quel est votre courriel pour recevoir la confirmation?</p>
      <p><b>Client:</b> claire.bouchard@example.com.</p>
      <p><b>NotaVoix:</b> Souhaitez-vous un rendez-vous pour un testament, un mandat, ou les deux?</p>
      <p><b>Summary:</b> Appointment booked and checklist queued.</p>
    `
  },
  copies: {
    title: "Outgoing call - Certified copies",
    billing: "6 min - no bill",
    client: "Julie Moreau",
    number: "514-555-0122",
    contactEmail: "julie.moreau@example.com",
    time: "May 12, 2026 - 16:10",
    direction: "Outgoing",
    email: "Email draft ready: certified copies fee confirmation.",
    transcript: `
      <p><b>NotaVoix:</b> Bonjour Mme Moreau, je vous appelle pour confirmer votre demande de copies certifiees.</p>
      <p><b>Client:</b> Oui, j'en ai besoin de deux.</p>
      <p><b>Summary:</b> Number of certified copies confirmed. Fee email requested.</p>
    `
  },
  consultation: {
    title: "Incoming call - Consultation juridique",
    billing: "7 min - escalated",
    client: "Robert Paquette",
    number: "450-555-0177",
    contactEmail: "robert.paquette@example.com",
    time: "May 12, 2026 - 14:02",
    direction: "Incoming",
    email: "Email draft ready: consultation appointment proposal.",
    transcript: `
      <p><b>NotaVoix:</b> Bonjour, puis-je avoir votre nom complet?</p>
      <p><b>Client:</b> Robert Paquette. J'ai une question juridique sur une copropriete.</p>
      <p><b>NotaVoix:</b> Merci M. Paquette. Cette question doit etre traitee par le notaire. Je vais creer une tache prioritaire.</p>
      <p><b>Summary:</b> Legal consultation detected and escalated. No legal advice provided.</p>
    `
  }
};

document.querySelectorAll(".call-row").forEach((button) => {
  button.addEventListener("click", () => {
    const call = callDetails[button.dataset.call];

    document.querySelectorAll(".call-row").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    document.getElementById("callTitle").textContent = call.title;
    document.getElementById("callBilling").textContent = call.billing;
    document.getElementById("callClient").textContent = call.client;
    document.getElementById("callNumber").textContent = call.number;
    document.getElementById("callEmail").textContent = call.contactEmail;
    document.getElementById("callTime").textContent = call.time;
    document.getElementById("callDirection").textContent = call.direction;
    document.getElementById("callTranscript").innerHTML = call.transcript;
    document.getElementById("callEmailLink").textContent = call.email;
  });
});

function loadCallDetail(callKey) {
  const call = callDetails[callKey];

  document.getElementById("callTitle").textContent = call.title;
  document.getElementById("callBilling").textContent = call.billing;
  document.getElementById("callClient").textContent = call.client;
  document.getElementById("callNumber").textContent = call.number;
  document.getElementById("callEmail").textContent = call.contactEmail;
  document.getElementById("callTime").textContent = call.time;
  document.getElementById("callDirection").textContent = call.direction;
  document.getElementById("callTranscript").innerHTML = call.transcript;
  document.getElementById("callEmailLink").textContent = call.email;
}

document.getElementById("convertCallEmail").addEventListener("click", () => {
  const client = document.getElementById("callClient").textContent;
  document.getElementById("callEmailLink").textContent = `Linked email draft created for ${client} in NotaMail.`;
});

document.querySelectorAll(".billable-row").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".billable-row").forEach((item) => item.classList.remove("active"));
    document.querySelectorAll(".call-row").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    loadCallDetail(button.dataset.call);
  });
});

const clientFiles = {
  amelie: {
    name: "Amelie Roy",
    status: "Open succession file",
    phone: "514-555-0198",
    email: "amelie.roy@example.com",
    matter: "Succession - Estate of Jean Roy",
    lastActivity: "Outgoing succession call converted to email",
    activity: [
      ["Jun 10", "Outgoing succession call logged and transcribed"],
      ["Jun 10", "Follow-up email draft created"],
      ["Jun 9", "Death certificate request added"]
    ],
    stored: ["Contact details", "Call transcripts", "Email drafts"],
    records: [
      ["Succession follow-up call", "Billable time", "0.50 h", "NotaVoix"],
      ["Succession checklist", "Email draft", "Ready", "NotaMail"],
      ["Estate intake", "Document request", "Pending client", "Client Portal"]
    ]
  },
  mariana: {
    name: "Mariana Costa",
    status: "Open real estate intake",
    phone: "+55 21 5555-0148",
    email: "mariana.costa@example.com",
    matter: "Real estate purchase - Montreal condo",
    lastActivity: "WhatsApp message converted to secure-upload email",
    activity: [
      ["Jun 10", "International intake call logged"],
      ["Jun 10", "WhatsApp reply prepared"],
      ["Jun 10", "Secure upload link requested"]
    ],
    stored: ["Contact details", "WhatsApp messages", "Call transcript"],
    records: [
      ["International intake", "Call transcript", "Logged", "NotaVoix"],
      ["Secure upload instructions", "Email draft", "Ready", "NotaMail"],
      ["Purchase intake", "Matter file", "Open", "Client Portal"]
    ]
  },
  claire: {
    name: "Claire Bouchard",
    status: "Appointment scheduled",
    phone: "438-555-0109",
    email: "claire.bouchard@example.com",
    matter: "Testament & Mandate",
    lastActivity: "Appointment booked and checklist queued",
    activity: [
      ["Jun 10", "NotaVoix call captured name, phone, and email"],
      ["Jun 10", "Appointment added to calendar"],
      ["Jun 10", "Checklist queued"]
    ],
    stored: ["Contact details", "Appointment", "Checklist"],
    records: [
      ["Will consultation", "Appointment", "Booked", "Appointments"],
      ["Testament checklist", "Email draft", "Queued", "NotaMail"],
      ["Call summary", "Transcript", "Stored", "NotaVoix"]
    ]
  },
  marc: {
    name: "Marc Lavoie",
    status: "Quittance follow-up",
    phone: "514-555-0144",
    email: "marc.lavoie@example.com",
    matter: "Quittance / mainlevee",
    lastActivity: "Radiation confirmed, ProCardex payment entry ready",
    activity: [
      ["Jun 10", "Radiation confirmation captured"],
      ["Jun 10", "Client status email prepared"],
      ["Jun 9", "Registry follow-up completed"]
    ],
    stored: ["Contact details", "Registry status", "Email draft"],
    records: [
      ["Radiation confirmation", "Registry record", "Confirmed", "NotaRad"],
      ["Client update", "Email draft", "Ready", "NotaMail"],
      ["Payment entry", "Accounting task", "Ready", "NotaRad"]
    ]
  }
};

document.querySelectorAll(".client-row").forEach((button) => {
  button.addEventListener("click", () => {
    const client = clientFiles[button.dataset.client];

    document.querySelectorAll(".client-row").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    document.getElementById("clientName").textContent = client.name;
    document.getElementById("clientStatus").textContent = client.status;
    document.getElementById("clientPhone").textContent = client.phone;
    document.getElementById("clientEmailDetail").textContent = client.email;
    document.getElementById("clientMatter").textContent = client.matter;
    document.getElementById("clientLastActivity").textContent = client.lastActivity;
    document.getElementById("clientActivity").innerHTML = client.activity
      .map(([date, item]) => `<li><b>${date}</b> ${item}</li>`)
      .join("");
    document.getElementById("clientStoredInfo").innerHTML = client.stored
      .map((item) => `<label><input type="checkbox" checked> ${item}</label>`)
      .join("");
    document.getElementById("clientRecords").innerHTML = client.records
      .map(([item, type, status, module]) => `<tr><td>${item}</td><td>${type}</td><td>${status}</td><td>${module}</td></tr>`)
      .join("");
  });
});

const emailDrafts = {
  appointment: {
    subject: "Appointment request",
    status: "Auto reply ready",
    message: `
      <p><b>From:</b> Sarah Pelletier &lt;sarah.pelletier@example.com&gt;</p>
      <p>Bonjour, j'aimerais prendre rendez-vous pour ouvrir un dossier d'achat immobilier. Avez-vous des disponibilites cette semaine?</p>
    `,
    draft: `
      <p>Bonjour Mme Pelletier,</p>
      <p>Merci pour votre message. Me Tremblay est disponible mardi a 10 h 30, mercredi a 14 h, ou jeudi a 9 h 15 pour votre rendez-vous d'achat immobilier.</p>
      <p>Veuillez confirmer la plage qui vous convient. Le rendez-vous sera ajoute au calendrier et la liste des documents requis vous sera envoyee automatiquement.</p>
    `
  },
  documents: {
    subject: "Missing insurance proof",
    status: "Draft ready",
    message: `
      <p><b>From:</b> Minh Nguyen &lt;minh.nguyen@example.com&gt;</p>
      <p>Bonjour, je veux confirmer que mon dossier est complet pour la signature de lundi.</p>
    `,
    draft: `
      <p>Bonjour M. Nguyen,</p>
      <p>Il manque toujours votre preuve d'assurance habitation indiquant la Banque Nationale comme creancier hypothecaire.</p>
      <p>Veuillez la transmettre par le lien securise avant demain 16 h afin d'eviter un retard dans votre dossier.</p>
    `
  },
  whatsappRealEstate: {
    subject: "WhatsApp - International real estate intake",
    status: "WhatsApp reply ready",
    message: `
      <p><b>WhatsApp from:</b> Mariana Costa, +55 21 5555-0148</p>
      <p>Bonjour, je suis a l'etranger et j'achete un condo a Montreal. Est-ce que je peux commencer le dossier par WhatsApp?</p>
    `,
    draft: `
      <p>Bonjour Mme Costa,</p>
      <p>Oui, nous pouvons commencer l'ouverture du dossier par WhatsApp. Pour proteger la confidentialite, les documents devront ensuite etre transmis par notre lien securise.</p>
      <p>Veuillez nous confirmer votre courriel, votre fuseau horaire, l'adresse de l'immeuble et vos disponibilites pour un appel de verification.</p>
    `
  },
  whatsappInvitation: {
    subject: "WhatsApp - Letter of invitation",
    status: "Requirements ready",
    message: `
      <p><b>WhatsApp from:</b> Ahmed Benali, +33 6 55 44 33 22</p>
      <p>Bonjour, j'ai besoin d'une lettre d'invitation notarisee pour venir visiter ma famille au Quebec. Quels documents sont requis?</p>
    `,
    draft: `
      <p>Bonjour M. Benali,</p>
      <p>Pour une lettre d'invitation, nous aurons besoin des informations de la personne qui invite au Quebec, des informations du visiteur, des dates prevues du sejour et de l'adresse d'hebergement.</p>
      <p>Nous pouvons vous envoyer une liste detaillee et proposer un rendez-vous par video si necessaire.</p>
    `
  },
  legal: {
    subject: "Question about servitude",
    status: "Escalation required",
    message: `
      <p><b>From:</b> Elise Martel &lt;elise.martel@example.com&gt;</p>
      <p>Bonjour, pouvez-vous me dire si une servitude inscrite au titre peut etre ignoree lors de la vente?</p>
    `,
    draft: `
      <p><b>Escalation required.</b></p>
      <p>Le client demande si une servitude peut etre ignoree dans le contexte de la vente. Cette question requiert l'analyse du notaire. Aucun envoi automatique.</p>
    `
  },
  sent: {
    subject: "Checklist sent to Marc Lavoie",
    status: "Sent via Gmail",
    message: `
      <p><b>To:</b> Marc Lavoie &lt;marc.lavoie@example.com&gt;</p>
      <p>Documents requis pour le suivi de quittance envoyes depuis Notavex et synchronises dans Gmail.</p>
    `,
    draft: `
      <p><b>Sent message.</b></p>
      <p>This email remains visible in the original Gmail sent folder and is attached to the Notavex client file.</p>
    `
  },
  testament: {
    subject: "Testament & Mandate - Testament request",
    status: "Checklist prepared",
    message: `
      <p><b>From:</b> Claire Bouchard &lt;claire.bouchard@example.com&gt;</p>
      <p>Bonjour, je souhaite prendre rendez-vous pour preparer mon testament notarie. Quels documents dois-je apporter?</p>
    `,
    draft: `
      <p>Bonjour Mme Bouchard,</p>
      <p>Merci pour votre message. Pour un rendez-vous de testament, veuillez prevoir deux pieces d'identite, votre etat civil complet, les noms et coordonnees de vos liquidateurs, ainsi qu'une liste sommaire de vos biens principaux.</p>
      <p>Nous pouvons vous proposer un rendez-vous mardi a 10 h 30 ou jeudi a 14 h.</p>
    `
  },
  whatsappSuccession: {
    subject: "WhatsApp - Succession from abroad",
    status: "Intake ready",
    message: `
      <p><b>WhatsApp from:</b> Sofia Pereira, +351 91 555 0184</p>
      <p>Bonjour, je suis au Portugal et ma mere est decedee a Montreal. Pouvez-vous aider avec la succession meme si je ne suis pas au Canada?</p>
    `,
    draft: `
      <p>Bonjour Mme Pereira,</p>
      <p>Nous vous offrons nos sympathies. Nous pouvons ouvrir un dossier de succession meme si vous etes a l'etranger. Les premieres informations requises sont l'acte de deces, le testament s'il existe, vos coordonnees completes et celles des heritiers connus.</p>
      <p>Nous vous proposerons ensuite un rendez-vous a distance pour confirmer les prochaines etapes.</p>
    `
  },
  mandate: {
    subject: "Testament & Mandate - Mandate information",
    status: "Draft ready",
    message: `
      <p><b>From:</b> Andre Gagnon &lt;andre.gagnon@example.com&gt;</p>
      <p>Bonjour, je veux faire un mandat de protection. Est-ce que je peux recevoir les informations pour commencer?</p>
    `,
    draft: `
      <p>Bonjour M. Gagnon,</p>
      <p>Nous pouvons vous accompagner pour la preparation d'un mandat de protection. Veuillez nous transmettre vos coordonnees completes, deux pieces d'identite, ainsi que le nom, l'adresse, le telephone et le courriel de la personne que vous souhaitez designer.</p>
      <p>Une consultation avec le notaire sera requise avant la preparation finale du document.</p>
    `
  },
  quittance: {
    subject: "Quittance/mainlevee follow-up",
    status: "Status reply ready",
    message: `
      <p><b>From:</b> Marc Lavoie &lt;marc.lavoie@example.com&gt;</p>
      <p>Bonjour, avez-vous des nouvelles de ma quittance? La banque me dit que le dossier est en traitement.</p>
    `,
    draft: `
      <p>Bonjour M. Lavoie,</p>
      <p>Votre dossier de quittance/mainlevee est toujours en suivi. Nous attendons la confirmation finale de radiation au Registre foncier avant de fermer le dossier.</p>
      <p>Nous vous aviserons des que la confirmation sera recue et que la copie finale sera disponible.</p>
    `
  },
  certifiedCopies: {
    subject: "Copies, declarations & invitations - Certified copies",
    status: "Fee reply ready",
    message: `
      <p><b>From:</b> Julie Moreau &lt;julie.moreau@example.com&gt;</p>
      <p>Bonjour, j'aurais besoin de copies certifiees conformes de mon acte notarie. Comment proceder?</p>
    `,
    draft: `
      <p>Bonjour Mme Moreau,</p>
      <p>Nous pouvons preparer des copies certifiees conformes. Veuillez nous confirmer le document vise, le nombre de copies souhaitees, ainsi que votre preference pour la cueillette ou l'envoi postal.</p>
      <p>Nous vous confirmerons les frais applicables avant la preparation.</p>
    `
  },
  swornDeclaration: {
    subject: "Copies, declarations & invitations - Sworn declaration",
    status: "Appointment reply ready",
    message: `
      <p><b>From:</b> Karim Haddad &lt;karim.haddad@example.com&gt;</p>
      <p>Bonjour, j'ai besoin d'une declaration sous serment pour un dossier administratif. Est-ce possible cette semaine?</p>
    `,
    draft: `
      <p>Bonjour M. Haddad,</p>
      <p>Oui, nous pouvons vous recevoir pour une declaration sous serment ou une attestation. Veuillez apporter le texte de la declaration, les documents justificatifs pertinents et deux pieces d'identite.</p>
      <p>Nous avons des disponibilites mercredi a 11 h 30 ou vendredi a 9 h 15.</p>
    `
  },
  invitation: {
    subject: "Copies, declarations & invitations - Letter of invitation",
    status: "Requirements ready",
    message: `
      <p><b>From:</b> Patricia Simard &lt;patricia.simard@example.com&gt;</p>
      <p>Bonjour, j'ai besoin d'une lettre d'invitation pour un membre de ma famille qui demande un visa de visiteur.</p>
    `,
    draft: `
      <p>Bonjour Mme Simard,</p>
      <p>Pour une lettre d'invitation, veuillez nous transmettre vos coordonnees completes, une copie de votre piece d'identite, les informations de la personne invitee, les dates prevues du sejour et l'adresse ou elle sera hebergee.</p>
      <p>Nous pourrons ensuite fixer un rendez-vous pour la signature.</p>
    `
  },
  marriage: {
    subject: "Marriage et Contrat de Marriage",
    status: "Intake ready",
    message: `
      <p><b>From:</b> Laurence Cote &lt;laurence.cote@example.com&gt;</p>
      <p>Bonjour, nous souhaitons nous marier et nous aimerions aussi discuter d'un contrat de mariage. Quels documents sont requis?</p>
    `,
    draft: `
      <p>Bonjour Mme Cote,</p>
      <p>Nous pouvons vous accompagner pour la celebration du mariage et/ou la preparation d'un contrat de mariage. Veuillez nous transmettre les coordonnees completes des deux futurs epoux, deux pieces d'identite chacun, vos actes de naissance si disponibles, ainsi que vos disponibilites pour une premiere rencontre.</p>
      <p>Le notaire confirmera ensuite les exigences applicables selon votre situation.</p>
    `
  },
  consultation: {
    subject: "Consultation juridique",
    status: "Escalate to notary",
    message: `
      <p><b>From:</b> Robert Paquette &lt;robert.paquette@example.com&gt;</p>
      <p>Bonjour, j'aimerais savoir quels sont mes droits dans un dossier de copropriete avec un voisin.</p>
    `,
    draft: `
      <p><b>Escalation required.</b></p>
      <p>Cette demande constitue une consultation juridique et doit etre traitee par le notaire. NotaMail peut proposer un rendez-vous, mais ne doit pas fournir d'opinion juridique par courriel.</p>
      <p>Reponse proposee: Bonjour M. Paquette, merci pour votre message. Votre question necessite une consultation avec le notaire. Souhaitez-vous un rendez-vous cette semaine?</p>
    `
  },
  succession: {
    subject: "Succession intake",
    status: "Intake checklist ready",
    message: `
      <p><b>From:</b> Amelie Roy &lt;amelie.roy@example.com&gt;</p>
      <p>Bonjour, mon pere est decede recemment et nous devons commencer les demarches de succession. Quels documents sont requis?</p>
    `,
    draft: `
      <p>Bonjour Mme Roy,</p>
      <p>Nous vous offrons nos sympathies. Pour ouvrir un dossier de succession, veuillez nous transmettre le certificat ou acte de deces, le testament s'il est disponible, les coordonnees des heritiers connus, ainsi qu'une liste preliminaire des biens et dettes.</p>
      <p>Nous pouvons fixer une premiere rencontre afin de vous expliquer les prochaines etapes.</p>
    `
  }
};

document.querySelectorAll(".email").forEach((button) => {
  button.addEventListener("click", () => {
    const email = emailDrafts[button.dataset.email];
    document.querySelectorAll(".email").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    document.getElementById("emailSubject").textContent = email.subject;
    document.getElementById("emailStatus").textContent = email.status;
    document.getElementById("emailMessage").innerHTML = email.message;
    document.getElementById("emailDraft").innerHTML = email.draft;
    document.getElementById("sendStatus").textContent = "Ready to send from reception@metremblay.ca.";
  });
});

document.getElementById("sendMail").addEventListener("click", () => {
  document.getElementById("sendStatus").textContent = "Sent through Gmail and logged to the client file.";
});

document.getElementById("composeMail").addEventListener("click", () => {
  document.getElementById("composePanel").classList.add("open");
});

document.getElementById("closeCompose").addEventListener("click", () => {
  document.getElementById("composePanel").classList.remove("open");
});

document.getElementById("sendComposedMail").addEventListener("click", () => {
  document.getElementById("sendStatus").textContent = "New email sent through Gmail and saved in Notavex.";
  document.getElementById("composePanel").classList.remove("open");
});

document.getElementById("toggleAiSections").addEventListener("click", () => {
  const toggle = document.getElementById("toggleAiSections");
  const sections = document.getElementById("aiSections");
  const isExpanded = toggle.getAttribute("aria-expanded") === "true";

  toggle.setAttribute("aria-expanded", String(!isExpanded));
  sections.classList.toggle("collapsed", isExpanded);
});

const appointmentDetails = {
  nguyen: {
    title: "Mortgage signing",
    client: "Minh Nguyen",
    time: "Monday, May 18 at 09:30",
    status: "Confirmed",
    source: "Booked by NotaVoix",
    docs: "ID, insurance, and lender instructions received"
  },
  martel: {
    title: "Will consultation",
    client: "Elise Martel",
    time: "Tuesday, May 19 at 11:00",
    status: "Waiting for documents",
    source: "Booked by NotaVoix",
    docs: "ID upload pending"
  },
  dupuis: {
    title: "Rapport review",
    client: "Dupuis purchase",
    time: "Tuesday, May 19 at 13:15",
    status: "Staff task",
    source: "Created by NotaRapport",
    docs: "Insurance validation and lender report ready"
  },
  pelletier: {
    title: "Real estate intake",
    client: "Sarah Pelletier",
    time: "Wednesday, May 20 at 14:00",
    status: "Tracked booking",
    source: "Booked by NotaMail",
    docs: "Checklist sent, ID pending"
  },
  lavoie: {
    title: "Quittance follow-up",
    client: "Marc Lavoie",
    time: "Thursday, May 21 at 15:30",
    status: "Confirmed",
    source: "Created by NotaRad",
    docs: "Radiation confirmation and ProCardex entry ready"
  }
};

document.querySelectorAll(".calendar-event[data-appointment]").forEach((button) => {
  button.addEventListener("click", () => {
    const detail = appointmentDetails[button.dataset.appointment];

    document.querySelectorAll(".calendar-event").forEach((item) => item.classList.remove("selected"));
    button.classList.add("selected");

    document.getElementById("detailTitle").textContent = detail.title;
    document.getElementById("detailClient").textContent = detail.client;
    document.getElementById("detailTime").textContent = detail.time;
    document.getElementById("detailStatus").textContent = detail.status;
    document.getElementById("detailSource").textContent = detail.source;
    document.getElementById("detailDocs").textContent = detail.docs;
  });
});

document.getElementById("bookAppointment").addEventListener("click", () => {
  const trackingItems = document.querySelectorAll("#appointments .checklist input");
  trackingItems.forEach((item) => {
    item.checked = true;
  });

  const detail = appointmentDetails.pelletier;
  document.getElementById("detailTitle").textContent = detail.title;
  document.getElementById("detailClient").textContent = detail.client;
  document.getElementById("detailTime").textContent = detail.time;
  document.getElementById("detailStatus").textContent = "Confirmed and tracked";
  document.getElementById("detailSource").textContent = detail.source;
  document.getElementById("detailDocs").textContent = "Checklist sent and SMS reminder scheduled";

  document.querySelectorAll(".calendar-event").forEach((item) => item.classList.remove("selected"));
  document.querySelector('[data-appointment="pelletier"]').classList.add("selected");
});
