import {Actions} from '../constants';
import Player from "../models/Player";
import {DraftEvent} from "../models/DraftEvent";
import {IDraftConfig} from "../models/IDraftConfig";
import PlayerEvent from "../models/PlayerEvent";

export interface IActionCompleted {
    type: Actions.ACTION_COMPLETED,
    value: DraftEvent
}

export interface IApplyConfig {
    type: Actions.APPLY_CONFIG,
    value: IDraftConfig
}

export interface ISetName {
    player: Player,
    type: Actions.SET_NAME,
    value: string
}

export interface ISendJoin {
    type: Actions.SEND_JOIN,
    name: string
}

export interface IClickOnCiv {
    type: Actions.CLICK_CIVILISATION,
    playerEvent: PlayerEvent,
    callback: any
}

export type Action = ISetName | IActionCompleted | IApplyConfig | ISendJoin | IClickOnCiv;

export function setName(player: Player, value: string): ISetName {
    return {
        player,
        type: Actions.SET_NAME,
        value
    }
}

export function act(value: DraftEvent): IActionCompleted {
    return {
        type: Actions.ACTION_COMPLETED,
        value
    }
}

export function applyConfig(value: IDraftConfig): IApplyConfig {
    return {
        type: Actions.APPLY_CONFIG,
        value
    }
}

export function sendJoin(name: string): ISendJoin {
    return {
        name,
        type: Actions.SEND_JOIN
    }
}

export function clickOnCiv(playerEvent: PlayerEvent, callback: any): IClickOnCiv {
    return {
        callback,
        playerEvent,
        type: Actions.CLICK_CIVILISATION
    }
}
