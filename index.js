import http from 'k6/http';
import { check, group, sleep } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { textSummary } from "https://jslib.k6.io/k6-summary/0.0.1/index.js";

export default function() {
    http.get('https://test.k6.io');
};


export function handleSummary(data) {
    return {
        "report.html" : htmlReport(data),
        stdout: textSummary(data, { indent: " ", enableColors: true }),
    };
}