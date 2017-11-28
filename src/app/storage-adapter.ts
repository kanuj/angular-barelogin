/**
 * Storage adapter override class
 * Uses localStorage for now, but can be changed to anything in the future
 */

export class StorageAdapter {

    private _adapter;

    constructor() {
        this._adapter = localStorage;
    }

    getItem(key: any): any {
        return this._adapter.getItem(key) || null;
    }

    setItem(key: any, value: any): boolean {
        try { this._adapter.setItem(key, value); return true; }
        catch (err) { return false; }
    }

    removeItem(key: any): boolean {
        try { this._adapter.removeItem(key); return true; }
        catch (err) { return false; }
    }
}
