import React from 'react';
import { PolicySection } from './types';

export const POLICY_SECTIONS: PolicySection[] = [
  {
    id: 'intro',
    title: '1. Introduction',
    content: (
      <>
        <p className="mb-4">
          Chez <strong>Yartzheit Keeper</strong> (« nous », « notre » ou « l'Application »), nous accordons une importance capitale à la confidentialité de vos données personnelles. Cette Politique de Confidentialité explique comment nous collectons, utilisons, divulguons et protégeons vos informations lorsque vous utilisez notre application mobile et nos services associés.
        </p>
        <p>
          En utilisant Yartzheit Keeper pour gérer les anniversaires de mémoire (Yartzheits), vous acceptez les pratiques décrites dans cette politique. Si vous n'êtes pas d'accord avec ces termes, veuillez ne pas utiliser l'Application.
        </p>
      </>
    ),
  },
  {
    id: 'collection',
    title: '2. Informations que nous collectons',
    content: (
      <>
        <p className="mb-4">
          Pour vous fournir un service de calcul de dates et de rappels précis, nous pouvons collecter les types d'informations suivants :
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>
            <strong>Informations de compte :</strong> Votre nom, adresse e-mail et préférences de notification lors de la création de votre compte.
          </li>
          <li>
            <strong>Informations des mémoriaux :</strong> Les noms des défunts, leurs dates de décès (calendrier grégorien ou hébraïque), l'heure du décès (avant ou après le coucher du soleil) et, optionnellement, des photos ou biographies que vous téléchargez.
          </li>
          <li>
            <strong>Données de localisation (Optionnel) :</strong> Utilisées uniquement pour calculer précisément les heures de coucher du soleil (Shkiah) locales afin de déterminer la date hébraïque exacte du Yartzheit.
          </li>
          <li>
            <strong>Données techniques :</strong> Informations sur votre appareil, votre version d'OS et des journaux d'erreurs anonymisés pour améliorer la stabilité de l'application.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'usage',
    title: '3. Comment nous utilisons vos données',
    content: (
      <>
        <p className="mb-4">
          Nous utilisons vos informations principalement pour :
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Calculer avec précision les dates de Yartzheit futures basées sur le calendrier hébraïque.</li>
          <li>Vous envoyer des rappels par e-mail ou notifications push avant les dates importantes (Yizkor, Yartzheit).</li>
          <li>Synchroniser vos données entre plusieurs appareils si vous êtes connecté.</li>
          <li>Améliorer nos algorithmes de calendrier et l'expérience utilisateur globale.</li>
          <li>Répondre à vos demandes de support technique.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'sharing',
    title: '4. Partage et divulgation des données',
    content: (
      <>
        <p className="mb-4">
          Nous ne vendons <strong>jamais</strong> vos données personnelles à des tiers. Nous pouvons partager vos informations uniquement dans les cas suivants :
        </p>
        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 mb-4">
          <h4 className="font-semibold text-blue-900 mb-2">Fournisseurs de services</h4>
          <p className="text-sm text-blue-800">
            Nous collaborons avec des tiers de confiance pour l'hébergement des données (ex: AWS, Firebase), l'envoi d'e-mails (ex: SendGrid) et l'analyse d'erreurs. Ces fournisseurs n'ont accès à vos données que pour effectuer ces tâches en notre nom et sont tenus à la confidentialité.
          </p>
        </div>
        <p>
          Nous pouvons également divulguer vos informations si la loi l'exige ou pour protéger nos droits et la sécurité de nos utilisateurs.
        </p>
      </>
    ),
  },
  {
    id: 'security',
    title: '5. Sécurité des données',
    content: (
      <>
        <p>
          Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées pour protéger vos données contre l'accès non autorisé, la modification, la divulgation ou la destruction. Toutes les données sensibles sont transmises via une connexion sécurisée (SSL/TLS) et stockées sur des serveurs chiffrés.
        </p>
      </>
    ),
  },
  {
    id: 'rights',
    title: '6. Vos droits',
    content: (
      <>
        <p className="mb-4">
          Conformément aux lois applicables (comme le RGPD en Europe), vous disposez des droits suivants concernant vos données :
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Accès et Portabilité :</strong> Vous pouvez demander une copie de vos données personnelles.</li>
          <li><strong>Rectification :</strong> Vous pouvez corriger toute information inexacte via les paramètres de l'application.</li>
          <li><strong>Suppression :</strong> Vous pouvez demander la suppression définitive de votre compte et de tous les mémoriaux associés.</li>
          <li><strong>Retrait du consentement :</strong> Vous pouvez vous désinscrire des notifications marketing à tout moment.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'contact',
    title: '7. Nous contacter',
    content: (
      <>
        <p className="mb-4">
          Si vous avez des questions concernant cette politique de confidentialité ou nos pratiques en matière de données, n'hésitez pas à nous contacter :
        </p>
        <p className="font-medium text-slate-900">
          Email : salomon.hazan@icloud.com<br />
          Adresse : 36 place georges Guynemer 95200 Sarcelles France
        </p>
      </>
    ),
  },
];