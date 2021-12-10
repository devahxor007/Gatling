package org.baseClass

import io.gatling.core.scenario.Simulation
import io.gatling.core.Predef._
import io.gatling.http.Predef._

class Base extends Simulation {

  // http config

  //scenario

  // setup

//  def httpConf(url: String): Unit = {

    val httpConf=  http.baseUrl("https://reqres.in")
      .header(name = "Accept", value = "application/json")


//  def bsScenario(scnName: String, reqName: String, serviceUrl: String, statusCode: Int): Unit = {
    val scn = scenario("Get-User")
      .exec(http("Single-User")
        .get("/api/users/2")
        .check(status is 200)



      )
   setUp(scn.inject(atOnceUsers(1)).protocols(httpConf))





}
