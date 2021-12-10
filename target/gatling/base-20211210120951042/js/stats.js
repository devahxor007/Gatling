var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "500",
        "ok": "0",
        "ko": "500"
    },
    "minResponseTime": {
        "total": "10262",
        "ok": "-",
        "ko": "10262"
    },
    "maxResponseTime": {
        "total": "12550",
        "ok": "-",
        "ko": "12550"
    },
    "meanResponseTime": {
        "total": "11347",
        "ok": "-",
        "ko": "11347"
    },
    "standardDeviation": {
        "total": "770",
        "ok": "-",
        "ko": "770"
    },
    "percentiles1": {
        "total": "11175",
        "ok": "-",
        "ko": "11175"
    },
    "percentiles2": {
        "total": "12167",
        "ok": "-",
        "ko": "12167"
    },
    "percentiles3": {
        "total": "12382",
        "ok": "-",
        "ko": "12382"
    },
    "percentiles4": {
        "total": "12394",
        "ok": "-",
        "ko": "12394"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 500,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "38.462",
        "ok": "-",
        "ko": "38.462"
    }
},
contents: {
"req_single-user-b37d3": {
        type: "REQUEST",
        name: "Single-User",
path: "Single-User",
pathFormatted: "req_single-user-b37d3",
stats: {
    "name": "Single-User",
    "numberOfRequests": {
        "total": "500",
        "ok": "0",
        "ko": "500"
    },
    "minResponseTime": {
        "total": "10262",
        "ok": "-",
        "ko": "10262"
    },
    "maxResponseTime": {
        "total": "12550",
        "ok": "-",
        "ko": "12550"
    },
    "meanResponseTime": {
        "total": "11347",
        "ok": "-",
        "ko": "11347"
    },
    "standardDeviation": {
        "total": "770",
        "ok": "-",
        "ko": "770"
    },
    "percentiles1": {
        "total": "11175",
        "ok": "-",
        "ko": "11175"
    },
    "percentiles2": {
        "total": "12167",
        "ok": "-",
        "ko": "12167"
    },
    "percentiles3": {
        "total": "12382",
        "ok": "-",
        "ko": "12382"
    },
    "percentiles4": {
        "total": "12394",
        "ok": "-",
        "ko": "12394"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 500,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "38.462",
        "ok": "-",
        "ko": "38.462"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
