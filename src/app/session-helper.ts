export class SessionHelper {

    /**
     * Create user session
     * Only called if credentials validated from the auth service
     */

    public createSession() {
        const sessionUUID = this.generateUUID();
        const sessionContent = { 'PKID': sessionUUID, 'auth': true };
        try {
            localStorage.setItem('SESSID', JSON.stringify(sessionContent));
            return true;
        } catch (err) {
            return false;
        }
    }

    private generateUUID() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
}
