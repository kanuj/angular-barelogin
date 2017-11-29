import { Injectable } from '@angular/core';
/**
 * Storage adapter override class
 * Uses localStorage for now, but can be changed to anything in the future
 */
@Injectable()
export class StorageAdapter {

    private storage: Storage;

    constructor() {
        this.storage = window.localStorage;
    }

    getItem(key: any): string | null {
        return this.storage.getItem(key) || null;
    }

    setItem(key: any, value: any): boolean {
        try { this.storage.setItem(key, value); return true; }
        catch (err) { return false; }
    }

    removeItem(key: any): boolean {
        try { this.storage.removeItem(key); return true; }
        catch (err) { return false; }
    }
}
