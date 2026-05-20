export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  category: string
  readingTime: string
  tags: string[]
  content: string
}

export const BLOG_POSTS: BlogPost[] = [
  // ── FONDATIONS (articles phares SEO) ──────────────────────────────────────
  {
    slug: "maison-fissuree-que-faire-var",
    title: "Ma maison se fissure : que faire ? Guide complet pour les propriétaires du Var",
    excerpt:
      "Fissures en façade, murs qui craquent, portes qui coincent… Dans le Var, le phénomène est fréquent. Découvrez les causes, comment évaluer la gravité et les solutions adaptées.",
    date: "2026-01-20",
    category: "Fondations",
    readingTime: "8 min de lecture",
    tags: ["Fissures", "Fondations", "Var"],
    content: `## Ma maison se fissure dans le Var : quelles causes et quelles solutions ?

Les fissures dans les maisons sont un phénomène courant dans le Var et plus généralement en région PACA. Le département figure parmi les zones les plus exposées au **retrait-gonflement des argiles (RGA)**, phénomène climatique qui provoque des mouvements du sol sous les fondations. Si certaines fissures sont bénignes, d'autres signalent un problème structurel grave qui nécessite une intervention rapide.

Dans ce guide, nous vous aidons à comprendre **d'où viennent les fissures**, comment évaluer leur gravité, et quelles solutions existent pour protéger votre maison.

---

## Les causes principales des fissures dans le Var

### 1. Le retrait-gonflement des argiles (RGA)

C'est la cause numéro 1 des fissures de maison en France. Les sols argileux se **rétractent en période de sécheresse** et se **gonflent lors des pluies**. Ce mouvement cyclique crée des poussées asymétriques sous les fondations qui, avec le temps, provoquent des fissures en façade, des fendillements intérieurs et des désordres structurels.

Dans le Var, de nombreuses communes — notamment dans l'arrière-pays et autour de Brignoles, Le Luc, Draguignan — sont classées en **aléa moyen à fort**. La sécheresse historique de 2022 a déclenché des milliers de sinistres dans le département.

### 2. Les tassements différentiels

Un tassement différentiel survient lorsque deux parties de la fondation ne s'enfoncent pas à la même vitesse. La maison se retrouve alors « en biais », ce qui génère des contraintes et des fissures obliques caractéristiques, souvent en escalier sur les murs en parpaings.

### 3. Des fondations insuffisantes pour le bâti ancien

Beaucoup de maisons construites avant 1970 dans le Var l'ont été avec des fondations peu profondes, parfois de simples semelles filantes à 50 cm de profondeur. À l'époque, les règles parasismiques et les exigences sur le sol n'existaient pas. Ces maisons sont aujourd'hui vulnérables aux mouvements du terrain.

### 4. La surcharge liée à une extension

Ajouter un étage, une véranda ou une extension importante sur une maison dont les fondations n'ont pas été conçues pour supporter ce poids supplémentaire peut provoquer des tassements et des fissures.

### 5. La végétation et les racines

Les arbres et arbustes proches de la maison puisent l'humidité en profondeur dans le sol. En période de sécheresse, ils accentuent le retrait des argiles directement sous les fondations.

---

## Comment évaluer la gravité d'une fissure ?

Toutes les fissures ne se ressemblent pas. Voici une grille d'évaluation simple :

| Caractéristique | Fissure bénigne | Fissure préoccupante | Fissure grave |
|---|---|---|---|
| Largeur | < 1 mm | 1 à 5 mm | > 5 mm |
| Profondeur | Superficielle (enduit seul) | Enduit + maçonnerie | Traversante |
| Orientation | Horizontale fine | Oblique | Verticale large ou en escalier |
| Évolution | Stable | Lente progression | Progression rapide |

**Les signes qui doivent alerter immédiatement :**
- Fissures traversantes que l'on voit des deux côtés d'un mur
- Porte ou fenêtre qui ne ferme plus, chassi déformé
- Plancher qui s'incline notablement
- Apparition soudaine après une période de sécheresse ou de fortes pluies

---

## Les 5 étapes à suivre si votre maison se fissure

### Étape 1 : Photographiez et documentez

Prenez des photos datées des fissures. Posez des **témoins en plâtre** (petites plaquettes collées à cheval sur la fissure) pour surveiller l'évolution dans le temps.

### Étape 2 : Contactez votre assureur

Signalez les dégâts à votre assurance habitation. Si la commune a fait l'objet d'un **arrêté de catastrophe naturelle (Cat Nat) pour sécheresse**, vous avez **30 jours** à compter de la publication au Journal Officiel pour déclarer le sinistre.

### Étape 3 : Faites appel à un professionnel du bâtiment

Un terrassier spécialisé en fondations ou un bureau d'études géotechnique peut réaliser un diagnostic. Évitez de vous fier uniquement à un rapport d'expert mandaté par l'assurance — faites contre-expertiser si nécessaire.

### Étape 4 : Choisissez la solution adaptée

Selon la nature du problème :
- **Micropieux** : ancrage des fondations dans un sol stable en profondeur
- **Reprise en sous-œuvre** : renforcement par plots bétonnés sous les semelles existantes
- **Injection de résines ou coulis** : consolidation du sol sous les fondations
- **Drainage périmétrique** : gestion des eaux de ruissellement et de l'humidité

### Étape 5 : Travaux + garanties

Les travaux de renforcement de fondation sont couverts par la **garantie décennale** de l'entreprise. Si vous avez une assurance dommages-ouvrage (DO), elle prend en charge les travaux sans attendre la décision judiciaire.

---

## Concaterra Terrassement : votre spécialiste fondations dans le Var

Basée à Gonfaron (83590), l'entreprise Concaterra Terrassement intervient dans tout le Var pour le **renforcement de fondation** après sinistres sécheresse, tassements ou fissures structurelles. Nous réalisons l'ensemble des travaux de micropieux, reprise en sous-œuvre et terrassement de confortement.

**[Contactez-nous pour un diagnostic et un devis gratuit](/contact)** — réponse sous 24h, intervention dans tout le Var (83).
`,
  },
  {
    slug: "micropieux-renforcement-fondation-var",
    title: "Micropieux dans le Var : tout savoir sur cette technique de renforcement des fondations",
    excerpt:
      "Les micropieux sont la technique de référence pour renforcer des fondations fragilisées sans démolir la maison. Principe, avantages, prix et cas d'usage dans le Var (83).",
    date: "2026-02-15",
    category: "Fondations",
    readingTime: "7 min de lecture",
    tags: ["Micropieux", "Fondations", "Technique"],
    content: `## Micropieux : la solution moderne pour renforcer les fondations dans le Var

Lorsque les fondations d'une maison sont fragilisées par les mouvements du sol, une sécheresse ou un tassement différentiel, la démolition et reconstruction ne sont pas l'unique option. Les **micropieux** permettent de renforcer les fondations existantes de manière durable, rapide et sans nécessiter le départ des occupants.

Cette technique est aujourd'hui la référence pour le renforcement de fondations dans le Var, où les sols argileux soumis au retrait-gonflement des argiles (RGA) fragilisent régulièrement les maisons individuelles.

---

## Qu'est-ce qu'un micropieu ?

Un micropieu est un **élément de fondation foré** de faible diamètre (généralement entre 100 et 300 mm) et de grande longueur (souvent 6 à 20 mètres). Il est réalisé en forant le sol depuis l'intérieur ou l'extérieur de la maison, en y insérant une armature métallique, puis en injectant du coulis de ciment sous pression.

Le micropieu va chercher les **couches géologiques stables** situées en profondeur, sous la zone d'influence des argiles superficielles. La charge de la maison est ainsi transmise directement à un sol porteur, contournant la couche d'argile problématique.

---

## Quand recourir aux micropieux ?

### Renforcement après sinistre sécheresse

C'est le cas le plus fréquent dans le Var. Une sécheresse intense provoque le retrait des argiles, les fondations se déchaussent et des fissures apparaissent. Les micropieux ancrent définitivement la maison dans un sol stable.

### Fondations insuffisantes d'une maison ancienne

Les maisons construites avant les années 1970 ont souvent des fondations superficielles, parfois à seulement 50 cm de profondeur. Si le bâtiment présente des désordres structurels, des micropieux permettent de les compléter sans démolir.

### Projet d'extension ou surélévation

Avant d'ajouter un étage ou une extension lourde, il est souvent nécessaire de vérifier et renforcer la capacité portante des fondations actuelles. Les micropieux permettent de répartir les nouvelles charges en profondeur.

### Terrain en pente ou instable

Dans l'arrière-pays varois, de nombreuses constructions sont réalisées sur des terrains en pente ou des remblais. Les micropieux créent un ancrage solide même sur ces géologies complexes.

---

## Les 4 types de micropieux (norme NF EN 14199)

La norme européenne classe les micropieux en 4 types selon leur mode d'injection :

| Type | Méthode | Usage typique |
|---|---|---|
| Type I | Injection gravitaire | Sols stables, charges faibles |
| Type II | Injection globale et répétitive | Usage courant en fondation |
| Type III | Injection unitaire et répétitive (IRS) | Sols médiocres, charges importantes |
| Type IV | Injection tube à manchettes | Terrains complexes, renforcement maximal |

Pour les renforcements de fondations de maisons individuelles dans le Var, les types II et III sont les plus utilisés.

---

## Le déroulement d'une intervention micropieux

### Phase 1 — Diagnostic géotechnique

Avant toute intervention, une étude de sol (mission G5 selon norme NF P 94-500) est réalisée pour identifier la nature du terrain, la profondeur des couches portantes et le dimensionnement des micropieux.

### Phase 2 — Conception et plan d'exécution

Un bureau d'études structures établit le plan d'implantation des micropieux, leur diamètre, leur profondeur et leur mode d'injection en fonction de la charge à reprendre.

### Phase 3 — Travaux de forage

Des foreuses compactes (accessibles par porte ou fenêtre si nécessaire) percent le sol vertical ou incliné. La technique génère peu de vibrations et est compatible avec une maison habitée.

### Phase 4 — Mise en place des armatures et injection

Une cage d'armature en acier est mise en place dans le forage. Le coulis de ciment est ensuite injecté sous pression pour assurer l'adhérence et la résistance du micropieu.

### Phase 5 — Liaison aux fondations existantes

Les têtes de micropieux sont reliées aux semelles existantes par des connecteurs en acier bétonnés. La charge est ainsi transmise sans désolidariser la structure.

---

## Les avantages des micropieux

- **Pas de démolition** : la maison reste habitée pendant les travaux
- **Engins compacts** : accessibles dans les sous-sols, caves ou pièces intérieures
- **Solution définitive** : durée de vie identique à celle de la structure
- **Garantie décennale** : les travaux sont couverts 10 ans
- **Compatible assurance** : prise en charge possible dans le cadre d'un sinistre Cat Nat

---

## Prix des micropieux dans le Var (indicatif 2026)

Le coût varie selon la profondeur, le diamètre, le nombre de micropieux et les conditions d'accès :

| Configuration | Fourchette indicative |
|---|---|
| Micropieu unitaire (8–10 m, Ø150 mm) | 1 200 – 2 500 € |
| Renforcement maison 100 m² (12–16 micropieux) | 18 000 – 35 000 € |
| Intervention en sous-sol accessible | Tarif standard |
| Accès difficile (terrasse, espace confiné) | +20 à +40 % |

*Ces tarifs sont indicatifs. Seul un devis après visite et étude de sol permet un chiffrage précis.*

---

## Concaterra Terrassement — Spécialiste micropieux dans le Var

Basée à Gonfaron (83590), notre entreprise réalise des chantiers de renforcement de fondation par micropieux dans tout le Var : Toulon, Brignoles, Draguignan, Hyères, Le Luc et les communes environnantes.

**[Demandez votre diagnostic et devis gratuit](/contact)** — intervention sous 48h pour les urgences.
`,
  },
  {
    slug: "sinistre-secheresse-cat-nat-var",
    title: "Sinistre sécheresse et Cat Nat : comment obtenir une indemnisation pour vos fondations dans le Var",
    excerpt:
      "Votre maison a subi des fissures suite à la sécheresse ? Le régime Cat Nat peut vous couvrir. Guide complet : démarches, délais, droits renforcés par l'ordonnance 2023.",
    date: "2026-03-10",
    category: "Assurance",
    readingTime: "9 min de lecture",
    tags: ["Cat Nat", "Sécheresse", "Assurance"],
    content: `## Sécheresse, fissures et Cat Nat : le guide complet pour les propriétaires du Var

La sécheresse de 2022 a été la plus destructrice de l'histoire en France pour les fondations : **2,5 milliards d'euros** d'indemnisations Cat Nat, des dizaines de milliers de maisons fissurées, et des délais d'instruction qui s'étendent sur des années. Dans le Var, plusieurs arrêtés de catastrophe naturelle ont été publiés ces dernières années, couvrant les communes sinistrées.

Ce guide vous explique comment fonctionne le régime Cat Nat, comment déclarer votre sinistre, et ce que vous pouvez obtenir.

---

## Qu'est-ce que le régime Cat Nat ?

Le régime **Catastrophe Naturelle (Cat Nat)** est encadré par la loi du 13 juillet 1982. Il permet aux assurés victimes d'un phénomène naturel intense (inondation, sécheresse, coulée de boue…) d'être indemnisés via leur contrat d'assurance multirisques habitation (MRH), **quelle que soit la cause directe des dégâts**.

Pour les fondations, le phénomène couvert est le **retrait-gonflement des argiles (RGA)**, causé par l'alternance de sécheresses et de réhumidifications.

### Conditions d'activation du Cat Nat

Le régime Cat Nat pour sécheresse s'active uniquement lorsqu'un **arrêté interministériel** (Intérieur + Budget) est publié au Journal Officiel, reconnaissant l'état de catastrophe naturelle pour une commune donnée sur une période donnée.

**Important :** si votre commune n'est pas dans l'arrêté, vous n'êtes pas couvert par le Cat Nat — même si vos voisins l'ont obtenu. Vous pouvez contester ce refus administrativement.

---

## Comment savoir si votre commune est concernée ?

1. Rendez-vous sur **georisques.gouv.fr** — rubrique « Arrêtés de catastrophe naturelle »
2. Saisissez le nom de votre commune
3. Consultez la liste des arrêtés publiés — vérifiez la période couverte

Si votre commune est classée et que vos dégâts correspondent à la période de reconnaissance, vous pouvez déclencher la procédure d'indemnisation.

---

## Les étapes pour déclarer un sinistre sécheresse / Cat Nat

### 1. Constatez et documentez immédiatement

- Photographiez toutes les fissures (date et heure dans les métadonnées)
- Filmez les désordres (portes coincées, dénivellations, fissures traversantes)
- Posez des **témoins en plâtre** pour surveiller l'évolution
- Conservez toutes les factures de travaux d'urgence

### 2. Déclarez dans les 30 jours

Vous disposez de **30 jours à compter de la publication de l'arrêté au Journal Officiel** pour déclarer le sinistre à votre assureur (article L.125-1 du Code des assurances). **Ce délai est impératif** — passé ce délai, votre dossier peut être refusé.

La déclaration doit contenir :
- Description précise des dommages
- Photos et estimations de remise en état
- Copie de l'arrêté Cat Nat concernant votre commune

### 3. L'expertise assurance

Votre assureur mandatera un **expert** pour évaluer les dommages et leur lien de causalité avec la sécheresse. Cet expert travaille pour l'assurance.

**Conseil :** faites appel à un **expert d'assuré** (expert indépendant) pour défendre vos intérêts. Son coût est souvent pris en charge par votre protection juridique.

### 4. La proposition d'indemnisation

L'assurance a **3 mois** après remise de l'état des pertes pour vous proposer une indemnisation. Ce délai est souvent dépassé en pratique, notamment après les grands sinistres collectifs.

### 5. Les travaux de réparation

L'indemnisation couvre les **travaux de remise en état** des dommages (reprise des fissures, renforcement des fondations, séchage, finitions). Elle ne couvre pas nécessairement la totalité si la vétusté est invoquée.

---

## Les droits renforcés par l'ordonnance du 8 février 2023

Suite aux critiques liées aux sinistres sécheresse 2018-2022, une **ordonnance du 8 février 2023** a amélioré les droits des sinistrés :

- **Meilleure information** : les assureurs doivent mieux informer les assurés sur les démarches
- **Délais d'instruction encadrés** : des sanctions en cas de dépassement excessif
- **Prise en compte du bâti entier** : les dommages doivent être évalués globalement, pas pièce par pièce
- **Possibilité de recours** : procédure de médiation simplifiée

---

## Et si mon assureur refuse ?

Un refus d'indemnisation peut être contesté :

1. **Réclamation écrite** auprès de votre assureur (courrier recommandé)
2. **Médiateur de l'assurance** (saisine gratuite : mediation-assurance.org)
3. **Tribunal judiciaire** si la médiation échoue

---

## Assurance dommages-ouvrage et garantie décennale

Si vous faites réaliser des travaux de **renforcement de fondations** après sinistre Cat Nat :

- L'entreprise doit être couverte par une **garantie décennale** (obligatoire pour travaux de gros œuvre)
- Si vous avez souscrit une **assurance dommages-ouvrage** (article L.242-1 du Code des assurances), elle prend en charge les réparations **sans attendre** la décision judiciaire sur la responsabilité

---

## Concaterra Terrassement accompagne votre dossier

Intervenant dans tout le Var depuis Gonfaron (83590), Concaterra Terrassement vous conseille sur les techniques adaptées à votre sinistre sécheresse, établit un rapport d'intervention détaillé utilisable dans votre dossier d'assurance, et réalise les travaux de renforcement de fondation dans les règles de l'art.

**[Contactez-nous pour un devis gratuit](/contact)** — nous intervenons dans les 48h pour les situations urgentes.
`,
  },
  {
    slug: "reprise-en-sous-oeuvre-fondations-var",
    title: "Reprise en sous-œuvre : technique, coûts et cas d'intervention dans le Var",
    excerpt:
      "La reprise en sous-œuvre renforce les fondations d'une maison sans démolition. Découvrez le principe, les techniques utilisées dans le Var et les fourchettes de prix.",
    date: "2026-04-05",
    category: "Fondations",
    readingTime: "8 min de lecture",
    tags: ["Reprise en sous-œuvre", "Fondations", "Technique"],
    content: `## Reprise en sous-œuvre : renforcer les fondations sans démolir

La **reprise en sous-œuvre** est une technique de génie civil qui consiste à renforcer ou remplacer les fondations existantes d'un bâtiment **sans le démolir**. Elle est utilisée lorsque les fondations d'origine sont insuffisantes ou lorsqu'elles ont été fragilisées par des phénomènes naturels (sécheresse, tassement, érosion) ou des modifications du bâtiment (surcharge, extension).

Dans le Var, où de nombreuses maisons individuelles anciennes présentent des fondations peu profondes sur des sols argileux, la reprise en sous-œuvre est une intervention de plus en plus fréquente.

---

## Pourquoi les fondations se fragilisent-elles ?

### Les argiles et la sécheresse

Les terrains argileux du Var subissent le phénomène de **retrait-gonflement des argiles (RGA)**. En période sèche, le sol se contracte et laisse des vides sous les semelles de fondation. Lorsque les pluies reviennent, le sol gonfle et pousse inégalement sur la structure. Ces cycles répétés finissent par fissurer et déstabiliser les fondations.

### Des fondations trop superficielles

Les maisons construites avant 1970 l'ont souvent été sans étude géotechnique préalable. Les fondations, parfois à seulement 40 à 60 cm de profondeur, ne descendent pas sous la zone d'influence des argiles. Elles sont donc vulnérables dès que le sol se dessèche.

### Une surcharge non prévue

Ajouter un niveau, construire une extension lourde ou installer un plancher en béton là où il n'y en avait pas augmente les charges transmises aux fondations au-delà de leur capacité initiale.

### L'érosion et les eaux souterraines

Dans les terrains en pente ou les zones karstiques de l'arrière-pays varois, les circulations d'eau peuvent éroder les sols porteurs sous les fondations, créant des vides invisibles.

---

## Les techniques de reprise en sous-œuvre

### 1. Le bétonnage par plots alternés (technique classique)

C'est la technique historique. On creuse sous la semelle existante par **plots alternés** (un plot sur deux d'abord, puis les plots intercalaires), on coule du béton armé, et une fois que les premiers plots ont durci, on traite les suivants. Ce travail en alternance évite de déstabiliser la structure pendant les travaux.

**Avantage :** technique éprouvée, bonne résistance  
**Inconvénient :** requiert un espace de travail sous le bâtiment, lent

### 2. Les micropieux forés et injectés

Les micropieux (Ø 100 à 300 mm) sont forés depuis l'intérieur ou l'extérieur du bâtiment et descendent jusqu'aux couches portantes profondes. Ils transmettent les charges de la structure au-delà de la zone d'argile superficielle.

**Avantage :** peu invasif, compatible maison habitée, engins compacts  
**Inconvénient :** coût unitaire plus élevé que les plots bétonnés

### 3. L'injection de coulis de ciment ou de résines

On fore des trous dans les fondations et le sol sous-jacent, puis on injecte sous pression du coulis de ciment ou des résines expansives. Cette technique **consolide le sol** plutôt que de le contourner.

**Avantage :** très peu invasif, applicable en zone habitée  
**Inconvénient :** efficacité limitée si le sol est très déstructuré

### 4. Le jet grouting

Technique avancée réservée aux gros ouvrages : injection haute pression qui mélange le sol avec du ciment pour créer des colonnes de sol-ciment. Utilisée pour les chargements très importants.

---

## Le processus complet d'une intervention

**Phase 1 — Visite et diagnostic**  
Un ingénieur géotechnique ou un professionnel qualifié inspecte le bâtiment, évalue les fissures, sonde le terrain et identifie la cause profonde des désordres.

**Phase 2 — Étude géotechnique (mission G5)**  
Une étude de sol permet de connaître la nature et la résistance des terrains en profondeur. Indispensable pour dimensionner correctement l'intervention.

**Phase 3 — Plan d'exécution**  
Un bureau d'études structures définit le nombre, la disposition, la profondeur et le dimensionnement des éléments de reprise en sous-œuvre.

**Phase 4 — Travaux**  
Intervention avec du matériel compact (foreuses légères, mini-pelles). La durée varie de quelques jours à plusieurs semaines selon l'ampleur du chantier.

**Phase 5 — Réception et garanties**  
Les travaux sont réceptionnés, documentés et couverts par la **garantie décennale** de l'entreprise intervenante.

---

## Fourchettes de prix dans le Var (2026)

| Type d'intervention | Fourchette indicative |
|---|---|
| Plots bétonnés (maison 80–100 m²) | 8 000 – 20 000 € |
| Micropieux (12 à 16 pieux) | 18 000 – 35 000 € |
| Injection résines (consolidation partielle) | 4 000 – 12 000 € |
| Reprise complète maison sur sous-sol | 25 000 – 60 000 € |

*Tarifs indicatifs, hors étude géotechnique et maîtrise d'œuvre. Devis gratuit sur visite.*

---

## Garanties applicables

- **Garantie décennale** (obligatoire, article 1792 du Code civil) : couvre les désordres compromettant la solidité de l'ouvrage pendant 10 ans
- **Assurance dommages-ouvrage** : permet d'être remboursé sans attendre la décision judiciaire
- **Indemnisation Cat Nat** : si les travaux font suite à un sinistre sécheresse reconnu

---

## Concaterra Terrassement : votre partenaire fondations dans le Var

Basée à Gonfaron (83590), Concaterra Terrassement intervient pour les travaux de reprise en sous-œuvre, micropieux et renforcement de fondation dans tout le département du Var. Nous travaillons en partenariat avec des bureaux d'études géotechniques et établissons les rapports nécessaires pour vos dossiers d'assurance.

**[Contactez-nous pour un diagnostic et un devis gratuit](/contact)** — réponse sous 24h.
`,
  },
  {
    slug: "rga-retrait-gonflement-argiles-var",
    title: "Retrait-Gonflement des Argiles (RGA) dans le Var : zones à risque et solutions",
    excerpt:
      "55 % du territoire français est désormais en zone RGA moyen à fort. Le Var est particulièrement exposé. Découvrez les communes à risque, comment le RGA endommage les fondations et comment se protéger.",
    date: "2026-05-05",
    category: "Fondations",
    readingTime: "8 min de lecture",
    tags: ["RGA", "Fondations", "Prévention"],
    content: `## Retrait-Gonflement des Argiles dans le Var : tout comprendre pour protéger votre maison

Le **Retrait-Gonflement des Argiles (RGA)** est le phénomène naturel le plus coûteux pour les assurances en France, devant les inondations. Avec la succession de sécheresses intenses depuis 2018, il est devenu un enjeu majeur pour les propriétaires du Var.

En avril 2026, le BRGM (Bureau de Recherches Géologiques et Minières) a publié une **nouvelle carte nationale des aléas RGA**, qui entre en vigueur le 1er juillet 2026. Elle classe désormais **55 % du territoire français** en zone d'aléa moyen à fort — contre 48 % auparavant. Dans le Var, de larges secteurs sont directement concernés.

---

## Qu'est-ce que le RGA ?

Les argiles ont une propriété physique particulière : elles **retiennent l'eau** et varient de volume selon l'humidité du sol.

- **En période humide** : les argiles gonflent et exercent une pression vers le haut sur les fondations
- **En période sèche** : les argiles se rétractent et laissent des vides sous les semelles

Ces mouvements cycliques, s'ils sont asymétriques (une partie de la fondation sur argile, l'autre sur roche stable), créent des **contraintes différentielles** qui fissurent les murs, déforment les ouvertures et peuvent mettre en péril la structure du bâtiment.

L'effet est amplifié par :
- La présence d'arbres et de végétation qui dessèchent le sol
- Les fuites de canalisations (eau froide ou chaude) qui humidifient localement
- L'imperméabilisation du sol (terrasses, dalles) qui concentre l'évaporation

---

## Les zones à risque dans le Var

Le Var est un département géologiquement varié : calcaires et schistes sur le littoral et dans le massif des Maures, mais des **poches argileuses importantes** dans l'arrière-pays et les vallées.

Les secteurs les plus exposés au RGA dans le Var incluent notamment :
- La **plaine de l'Arc** entre Aix-en-Provence et Brignoles
- Le secteur de **Brignoles – Le Luc – Le Cannet-des-Maures**
- Les communes de la **vallée du Gapeau** (Solliès-Pont, Cuers, Pierrefeu)
- Certains secteurs de l'arrière-pays draguignanais

**Pour connaître le niveau d'aléa de votre commune :** consultez la carte interactive sur georisques.gouv.fr ou le portail du BRGM.

---

## Les signes d'alerte du RGA sur une maison

Le RGA ne se manifeste pas brutalement — les désordres s'installent progressivement, souvent sur plusieurs années. Voici les signes à surveiller :

**En façade :**
- Fissures obliques à 45° partant des angles des fenêtres et portes
- Fissures en escalier sur les joints de maçonnerie
- Décollement de l'enduit en plages

**À l'intérieur :**
- Fissures fines aux jonctions murs/plafond
- Portes et fenêtres qui ferment mal (huisseries déformées)
- Planchers qui s'inclinent légèrement
- Fissures en bas des cloisons au niveau du plancher bas

**En fondation :**
- Affaissement visible d'un angle de la maison
- Décalage entre deux parties du bâtiment (corps principal et extension)

---

## Les mesures préventives

Si votre maison est en zone RGA mais n'a pas encore subi de désordres, des mesures simples réduisent le risque :

### 1. Gestion de la végétation
- Maintenez une distance minimale de **1,5 × la hauteur** entre un arbre et la maison
- Évitez les haies et arbustes à fort enracinement à moins de 5 m des fondations
- En cas d'abattage d'un arbre proche, surveillez les fondations pendant 2 ans (le sol peut gonfler en se réhumidifiant)

### 2. Drainage et gestion des eaux
- Installez un réseau de drainage périmétrique si le terrain est sujet aux stagnations
- Évacuez les eaux de pluie loin de la maison (gouttières, écoulement à 2 m minimum)
- Vérifiez régulièrement l'absence de fuites sur les réseaux enterrés

### 3. Imperméabilisation raisonnée
- Ne créez pas de grande dalle imperméable collée contre la maison — elle crée un effet de dessiccation localisée

### 4. Surveillance régulière
- Inspectez visuellement les façades et les murs intérieurs chaque printemps et chaque automne
- Posez des témoins en plâtre sur les fissures existantes pour mesurer leur évolution

---

## Que faire si votre maison est déjà touchée par le RGA ?

### Étape 1 : Faire réaliser un diagnostic
Un professionnel spécialisé ou un bureau d'études géotechnique peut identifier les zones de tassement, les fissures structurelles et la profondeur des fondations.

### Étape 2 : Vérifier l'éligibilité Cat Nat
Si une sécheresse reconnue a touché votre commune, déclarez le sinistre à votre assureur dans les **30 jours** suivant la publication de l'arrêté au Journal Officiel.

### Étape 3 : Choisir la technique de renforcement adaptée
- **Micropieux** : pour ancrer les fondations dans un sol stable en profondeur
- **Reprise en sous-œuvre** : pour renforcer les semelles existantes par plots bétonnés
- **Drainage périmétrique** : pour stabiliser l'humidité du sol autour des fondations

---

## La réglementation en évolution

La loi **Elan de 2018** (article L.112-20 du CCH) impose des études géotechniques préalables pour toute construction neuve en zone RGA moyen à fort depuis le 1er janvier 2020. Pour les maisons existantes, aucune obligation n'existe, mais les prêts immobiliers incluent de plus en plus une clause de diagnostic géotechnique.

L'**ordonnance du 8 février 2023** a renforcé les droits des propriétaires sinistrés dans le cadre du régime Cat Nat sécheresse, en améliorant les conditions d'indemnisation.

---

## Concaterra Terrassement, spécialiste RGA dans le Var

Depuis Gonfaron (83590), au cœur du Var, Concaterra Terrassement intervient pour le diagnostic, le renforcement de fondation et les travaux de drainage sur tout le département. Notre connaissance des sols varois et de leurs caractéristiques argileuses nous permet d'apporter des solutions adaptées à chaque situation.

**[Demandez votre diagnostic gratuit](/contact)** — réponse sous 24h, intervention dans tout le Var (83).
`,
  },
  // ── TERRASSEMENT & VRD (articles existants) ───────────────────────────────
  {
    slug: "comment-se-deroule-chantier-terrassement",
    title: "Comment se déroule un chantier de terrassement ?",
    excerpt:
      "De la prise en charge du projet à la livraison du terrain, découvrez toutes les étapes d'un chantier de terrassement professionnel dans le Var.",
    date: "2025-03-15",
    category: "Conseils",
    readingTime: "5 min de lecture",
    tags: ["Terrassement", "Chantier", "Conseils"],
    content: `
## Les grandes étapes d'un chantier de terrassement

Un chantier de terrassement, qu'il soit destiné à la construction d'une maison, à l'aménagement d'un accès ou à la réalisation d'une piscine, suit un processus bien défini. Voici comment Concaterra Terrassement organise chaque intervention dans le Var.

### 1. La visite préalable et le devis

Tout commence par une visite sur site. Notre équipe se déplace à Gonfaron, Toulon, Draguignan ou dans toute autre commune du Var pour évaluer la nature du terrain, les volumes à terrasser et les contraintes d'accès. Cette visite est gratuite et nous permet d'établir un devis précis.

Nous analysons notamment :
- La nature du sol (argile, roche, sable, remblai)
- Les risques de présence de réseaux enterrés
- Les accès pour nos engins de chantier
- Les volumes de déblais à évacuer ou réutiliser

### 2. La préparation du chantier

Avant de démarrer les travaux, plusieurs démarches sont nécessaires :
- **Déclaration de projet de travaux (DT/DICT)** : obligatoire pour repérer les réseaux souterrains
- **Autorisation de voirie** si les engins doivent emprunter la voie publique
- **Délimitation du chantier** pour assurer la sécurité

### 3. Les travaux de terrassement

Le terrassement proprement dit comprend plusieurs phases :

**Le décapage** : on retire la terre végétale en surface, qui sera stockée séparément pour être réutilisée en finition.

**Les fouilles** : creusement selon les plans fournis par le maître d'œuvre ou l'architecte. Chaque centimètre compte pour garantir des fondations solides.

**Le chargement et l'évacuation** : les terres excédentaires sont chargées dans nos camions bennes et évacuées vers des sites de stockage agréés ou valorisées comme remblais sur d'autres chantiers.

**Le compactage** : les terrains remblayés doivent être compactés couche par couche pour éviter tout tassement ultérieur.

### 4. Les finitions

Une fois le terrassement principal effectué, nous procédons aux finitions :
- Nivellement du terrain
- Réglage de la terre végétale
- Préparation des accès définitifs

### 5. La réception du chantier

Nous procédons avec vous à la réception contradictoire du chantier pour vérifier que toutes les cotes sont respectées et que le terrain est parfaitement prêt pour la suite des travaux.

## Pourquoi faire appel à un professionnel ?

Un terrassement mal réalisé peut avoir des conséquences graves : fondations instables, problèmes de drainage, glissements de terrain. Faire appel à Concaterra Terrassement, c'est bénéficier de l'expérience d'une entreprise locale du Var qui connaît parfaitement les sols de notre région.

**Vous avez un projet de terrassement dans le Var ? [Demandez votre devis gratuit](/contact) dès maintenant.**
    `,
  },
  {
    slug: "prix-terrassement-provence-2025",
    title: "Prix du terrassement en Provence : ce qu'il faut savoir en 2025",
    excerpt:
      "Combien coûte un terrassement dans le Var en 2025 ? Fourchettes de prix, facteurs qui influencent le coût et conseils pour bien budgéter votre projet.",
    date: "2025-02-20",
    category: "Prix & Budgets",
    readingTime: "7 min de lecture",
    tags: ["Terrassement", "Prix", "PACA"],
    content: `
## Prix du terrassement en Provence-Alpes-Côte d'Azur en 2025

Le coût d'un chantier de terrassement dans le Var dépend de nombreux facteurs. Il est difficile de donner un prix fixe sans étudier le dossier, mais voici les fourchettes généralement constatées en région PACA pour vous aider à budgétiser votre projet.

### Les facteurs qui influencent le prix

**1. La nature du terrain**

C'est le facteur le plus déterminant. Un sol en terre meuble est bien plus simple (et moins cher) à terrasser qu'une roche dure nécessitant un brise-roche hydraulique ou du ripage.

- Terre meuble : tarif de base
- Terrain rocheux : +30 à +80% selon la dureté
- Sol argileux humide : surcoût possible lié aux risques d'éboulement

**2. Le volume à terrasser**

Plus le volume est important, plus le coût au m³ diminue (économies d'échelle). Les tarifs sont généralement dégressifs.

**3. L'accessibilité du chantier**

Un terrain difficile d'accès (chemin étroit, pente forte, zone urbaine dense) nécessite des engins spécifiques et plus de temps, ce qui augmente le coût.

**4. L'évacuation des terres**

Le coût de mise en décharge ou de transport des terres excédentaires s'ajoute au terrassement. En 2025, les filières de valorisation permettent parfois de réduire ces coûts.

### Fourchettes de prix indicatives en 2025

| Type de travaux | Prix indicatif |
|----------------|----------------|
| Déblayage terrain (m³) | 15 – 40 €/m³ |
| Remblayage compacté (m³) | 20 – 50 €/m³ |
| Terrassement pour maison (100 m²) | 3 000 – 8 000 € |
| Terrassement piscine | 1 500 – 4 000 € |
| VRD complet (maison individuelle) | 5 000 – 15 000 € |
| Enrochement (ml) | 150 – 350 €/ml |

*Ces tarifs sont indicatifs et peuvent varier selon les conditions spécifiques du chantier.*

### Comment obtenir le meilleur prix ?

1. **Faites établir plusieurs devis** : comparez au minimum 2 ou 3 entreprises locales
2. **Prévoyez la phase de terrassement en amont** : éviter les urgences permet d'obtenir de meilleures conditions
3. **Valorisez vos terres** : si vos terres sont réutilisables (remblais propres), signalez-le à l'entreprise
4. **Regroupez les prestations** : terrassement + VRD + transport au même prestataire revient souvent moins cher

### Pourquoi choisir une entreprise locale dans le Var ?

Concaterra Terrassement est basé à Gonfaron (83590). Nos tarifs intègrent des déplacements réduits, une connaissance parfaite des sols varois et un réseau local (sous-traitants, fournisseurs) qui nous permet d'optimiser nos coûts. Pas d'intermédiaires, pas de frais cachés.

**Obtenez votre devis gratuit en [remplissant notre formulaire](/contact) — réponse sous 24h.**
    `,
  },
  {
    slug: "pourquoi-confier-vrd-professionnel-local-var",
    title: "Pourquoi confier votre VRD à un professionnel local dans le Var ?",
    excerpt:
      "Les travaux de VRD (Voirie et Réseaux Divers) requièrent expertise et connaissance du terrain local. Découvrez pourquoi choisir un prestataire varois fait la différence.",
    date: "2025-01-10",
    category: "VRD",
    readingTime: "6 min de lecture",
    tags: ["VRD", "Var", "Réseaux"],
    content: `
## VRD dans le Var : l'importance du local

Les travaux de Voirie et Réseaux Divers (VRD) sont la colonne vertébrale de tout projet de construction. Réseaux d'eau potable, assainissement, électricité, télécom, voirie d'accès… tout cela conditionne la viabilité et la valeur d'un bien immobilier. Choisir le bon prestataire, de préférence local, n'est pas anodin.

### Qu'est-ce que le VRD exactement ?

Les VRD regroupent l'ensemble des travaux qui permettent de raccorder un terrain ou un bâtiment aux différents réseaux :

**Réseaux humides :**
- Adduction d'eau potable (AEP)
- Assainissement eaux usées (EU)
- Assainissement eaux pluviales (EP)
- Irrigation

**Réseaux secs :**
- Électricité (Enedis)
- Télécommunications (Orange, fibre optique)
- Éclairage public
- Gaz

**Voirie :**
- Chaussées et accès
- Trottoirs et bordures
- Signalisation horizontale et verticale
- Parkings

### Pourquoi la connaissance locale est décisive

**1. La connaissance des réseaux existants**

Dans le Var, les réseaux sont parfois anciens, mal cartographiés ou souterrains sans signalisation. Une entreprise locale comme Concaterra Terrassement connaît les spécificités des communes du 83 : zones inondables, secteurs rocheux, contraintes des terrains en pente caractéristiques de notre relief provençal.

**2. Les relations avec les concessionnaires**

Travailler sur un chantier VRD implique de coordonner avec Enedis, Veolia, les services techniques communaux, GRDF… Un prestataire local entretient des relations durables avec ces interlocuteurs, ce qui facilite l'obtention des permissions et accélère les délais d'intervention.

**3. La réactivité en cas d'imprévu**

Un imprévu sur chantier (réseau non répertorié, sol différent de ce qui était prévu, intempéries) nécessite une réponse rapide. Un prestataire basé à Gonfaron est sur place en quelques minutes, là où une entreprise extérieure au département facture des déplacements et perds du temps.

**4. La conformité aux réglementations locales**

Chaque commune a ses propres règles : réseaux communaux, servitudes de passage, PLU… Un professionnel local maîtrise ces contraintes et vous guide pour obtenir les autorisations nécessaires sans mauvaise surprise.

### Les étapes d'un chantier VRD réussi

1. **Étude et conception** avec les plans des réseaux existants (DICT)
2. **Terrassement des tranchées** avec les engins appropriés
3. **Pose des canalisations et gaines** selon les normes en vigueur
4. **Remblayage et compactage** soigné pour éviter les affaissements
5. **Tests et réception** avec les concessionnaires
6. **Réfection de surface** (enrobé, béton, dallage selon contexte)

### Concaterra Terrassement : votre partenaire VRD dans le Var

Fort de son expérience dans les travaux publics (Code NAF 43.12Z), Concaterra Terrassement réalise des chantiers VRD complets de A à Z, du devis à la réception, sur tout le département du Var : Toulon, Draguignan, Brignoles, Hyères, Le Luc, Vidauban, Fréjus et leurs environs.

**[Contactez-nous pour un devis VRD gratuit](/contact) — intervention dans tout le Var (83).**
    `,
  },
]
