export class Trip {
    constructor(
        public destinations: Array<string>,
        public tracks: Array<string>,
        public acc: Array<string>,
        public transport: Array<string>,
        public tripDaysMin: number,
        public tripDaysMax: number,
        public tripDays: string,
        public adults: number,
        public children: number,
        public sessionId: string,
        public trips,
    ){}
}
