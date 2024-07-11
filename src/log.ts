const appName = 'NoCookiesOnlyMilk';

const colors = {
    'INFO': '#11a8cd',
    'WARN': '#e5e510',
    'ERROR': '#f14c4c'
}

export default function log(type: 'INFO' | 'WARN' | 'ERROR', message: string) {
    console.log(`%c[${appName}] [${type}]%c ${message}`, `color: ${colors[type]}; font-weight: bold`, `color: ${colors[type]}`);
}
