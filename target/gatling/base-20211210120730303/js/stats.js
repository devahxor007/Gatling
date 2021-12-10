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
        "total": "10130",
        "ok": "-",
        "ko": "10130"
    },
    "maxResponseTime": {
        "total": "12284",
        "ok": "-",
        "ko": "12284"
    },
    "meanResponseTime": {
        "total": "11029",
        "ok": "-",
        "ko": "11029"
    },
    "standardDeviation": {
        "total": "789",
        "ok": "-",
        "ko": "789"
    },
    "percentiles1": {
        "total": "10531",
        "ok": "-",
        "ko": "10531"
    },
    "percentiles2": {
        "total": "11791",
        "ok": "-",
        "ko": "11791"
    },
    "percentiles3": {
        "total": "11965",
        "ok": "-",
        "ko": "11965"
    },
    "percentiles4": {
        "total": "12104",
        "ok": "-",
        "ko": "12104"
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
        "total": "10130",
        "ok": "-",
        "ko": "10130"
    },
    "maxResponseTime": {
        "total": "12284",
        "ok": "-",
        "ko": "12284"
    },
    "meanResponseTime": {
        "total": "11029",
        "ok": "-",
        "ko": "11029"
    },
    "standardDeviation": {
        "total": "789",
        "ok": "-",
        "ko": "789"
    },
    "percentiles1": {
        "total": "10531",
        "ok": "-",
        "ko": "10531"
    },
    "percentiles2": {
        "total": "11791",
        "ok": "-",
        "ko": "11791"
    },
    "percentiles3": {
        "total": "11965",
        "ok": "-",
        "ko": "11965"
    },
    "percentiles4": {
        "total": "12104",
        "ok": "-",
        "ko": "12104"
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
