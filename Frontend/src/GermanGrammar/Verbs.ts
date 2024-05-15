import Verb from "../models/Verb";
import VerbZeitform from "../models/VerbZeitform";

const werdenPraesens: VerbZeitform = {
    zeitform: "Präsens",
    ich: "werde",
    du: "wirst",
    er: "wird",
    wir: "werden",
    ihr: "werdet",
    sie: "werden",
};

const habenPraesens: VerbZeitform = {
    zeitform: "Präsens",
    ich: "habe",
    du: "hast",
    er: "hat",
    wir: "haben",
    ihr: "habt",
    sie: "haben",
};

const seinPraesens: VerbZeitform = {
    zeitform: "Präsens",
    ich: "bin",
    du: "bist",
    er: "ist",
    wir: "sind",
    ihr: "seid",
    sie: "sind",
};

const habenPraeteritum: VerbZeitform = {
    zeitform: "Präteritum",
    ich: "hatte",
    du: "hattest",
    er: "hatte",
    wir: "hatten",
    ihr: "hattet",
    sie: "hatten",
};

const seinPraeteritum: VerbZeitform = {
    zeitform: "Präteritum",
    ich: "war",
    du: "warst",
    er: "war",
    wir: "waren",
    ihr: "wart",
    sie: "waren",
};


const getVerbRoot = (verb: Verb): string => {
    return verb.infinitive.slice(0, verb.infinitive.length - 2);
}

const getHilfsverbPraesens = (verb: Verb): VerbZeitform => {
    if (verb.hilfsverb.trim() === "haben") {
        return habenPraesens;
    } else {
        return seinPraesens;
    }
}

const getHilfsverbPrateritum = (verb: Verb): VerbZeitform => {
    if (verb.hilfsverb.trim() === "haben") {
        return habenPraeteritum;
    } else {
        return seinPraeteritum;
    }
}

export const getPraesens = (verb: Verb): VerbZeitform => {
    const root = getVerbRoot(verb);

    return {
        zeitform: "Präsens",
        ich: verb.praesens_ich,
        du: verb.praesens_du,
        er: verb.praesens_er,
        wir: root + "en",
        ihr: root + "t",
        sie: root + "en",
    };
}

export const getPraeteritum = (verb: Verb): VerbZeitform => {
    const root = getVerbRoot(verb);
    if(verb.infinitive === 'sein') {
        return seinPraeteritum;
    }

    const weakVerb = root.endsWith("t") || root.endsWith("d") || root.endsWith("m") || root.endsWith("n") || root.endsWith("e") || root.endsWith('te');
    const shouldAddE = !weakVerb && !verb.praeteritum_ich.endsWith('e');

    return {
        zeitform: "Präteritum",
        ich: verb.praeteritum_ich,
        du: verb.praeteritum_ich + (shouldAddE ? 'e' : '') + "st",
        er: verb.praeteritum_ich,
        wir: verb.praeteritum_ich + (shouldAddE? 'e' : '') +"n",
        ihr: verb.praeteritum_ich +  (shouldAddE ? 'e' : '')+"t",
        sie: verb.praeteritum_ich + (shouldAddE? 'e': '') + "n",
    };
}

export const getFuturI = (verb: Verb): VerbZeitform => {
    return {
        zeitform: "Futur I",
        ich: werdenPraesens.ich + " " + verb.infinitive,
        du: werdenPraesens.du + " " + verb.infinitive,
        er: werdenPraesens.er + " " + verb.infinitive,
        wir: werdenPraesens.wir + " " + verb.infinitive,
        ihr: werdenPraesens.ihr + " " + verb.infinitive,
        sie: werdenPraesens.sie + " " + verb.infinitive,
    };
}

export const getPerfekt = (verb: Verb): VerbZeitform => {
    const hilfsverbPraesens = getHilfsverbPraesens(verb);

    return {
        zeitform: "Perfekt",
        ich: hilfsverbPraesens.ich + " " + verb.partizip_II,
        du: hilfsverbPraesens.du + " " + verb.partizip_II,
        er: hilfsverbPraesens.er + " " + verb.partizip_II,
        wir: hilfsverbPraesens.wir + " " + verb.partizip_II,
        ihr: hilfsverbPraesens.ihr + " " + verb.partizip_II,
        sie: hilfsverbPraesens.sie + " " + verb.partizip_II,
    };
}

export const getPlusquamperfekt = (verb: Verb): VerbZeitform => {
    const hilfsverbPrateritum = getHilfsverbPrateritum(verb);

    return {
        zeitform: "Plusquamperfekt",
        ich: hilfsverbPrateritum.ich + " " + verb.partizip_II,
        du: hilfsverbPrateritum.du + " " + verb.partizip_II,
        er: hilfsverbPrateritum.er + " " + verb.partizip_II,
        wir: hilfsverbPrateritum.wir + " " + verb.partizip_II,
        ihr: hilfsverbPrateritum.ihr + " " + verb.partizip_II,
        sie: hilfsverbPrateritum.sie + " " + verb.partizip_II,
    };
}

export const getFuturII = (verb: Verb): VerbZeitform => {
    return {
        zeitform: "Futur II",
        ich: werdenPraesens.ich + " " + verb.partizip_II + " " + verb.hilfsverb,
        du: werdenPraesens.du + " " + verb.partizip_II + " " + verb.hilfsverb,
        er: werdenPraesens.er + " " + verb.partizip_II + " " + verb.hilfsverb,
        wir: werdenPraesens.wir + " " + verb.partizip_II + " " + verb.hilfsverb,
        ihr: werdenPraesens.ihr + " " + verb.partizip_II + " " + verb.hilfsverb,
        sie: werdenPraesens.sie + " " + verb.partizip_II + " " + verb.hilfsverb,
    };
}