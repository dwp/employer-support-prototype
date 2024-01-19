const express = require('express')
const dayjs = require('dayjs')
var objectSupport = require("dayjs/plugin/objectSupport");
dayjs.extend(objectSupport);

const router = express.Router()

//Radio button redirect package
const radioButtonRedirect = require('radio-button-redirect')
router.use(radioButtonRedirect)

// Add your routes here - above the module.exports line

router.post('/prototype-A/ssp-routing', function (req, res) {

    let currentSituation = req.session.data.currentSituation;

    const day = Number(req.session.data['employeeLeaveDateDayA'])
    const month = Number(req.session.data['employeeLeaveDateMonthA'])
    const year = Number(req.session.data['employeeLeaveDateYearA'])

    const startDate = dayjs({ year : year, month : month-1, day :day})

    const now = dayjs()

    const daysEmployeeOffSick = now.diff(startDate, "day")

    console.log(daysEmployeeOffSick)

    req.session.data['daysEmployeeOffSick'] = daysEmployeeOffSick

    if (daysEmployeeOffSick <= '3') {
        res.redirect('est-g1');
    } else if (daysEmployeeOffSick >= '197') {
        res.redirect('est-g7');
    } else {
        res.redirect('est-g2&3');
    }

 });


router.post('/prototype-A/sta-q2-routing', function (req, res) {
    let staQ2 = req.session.data.staQ2;

    if (staQ2 == 'yesWorking'){
        res.redirect('est-q3');
    } else {
        res.redirect('est-q1');
    }   
});

router.post('/prototype-A/est-q7-routing', function (req, res) {
    let estQ7 = req.session.data.estQ7;

    if (estQ7 == 'yes'){
        res.redirect('com-g1');
    } else {
        res.redirect('com-g1');
    }   
});

router.post('/prototype-A/est-q5-routing', function (req, res) {

    let staQ2 = req.session.data.staQ2;

    if (staQ2 == 'offWork'){
        res.redirect('est-q3');
    } else {
        res.redirect('est-g4');
    }   
});

router.post('/prototype-A/est-q3-routing', function (req, res) {

    let estQ3 = req.session.data.estQ3;
    let staQ2 = req.session.data.staQ2;

    if (staQ2 == 'yesWorking' && estQ3 == 'notToldMe') {
        res.redirect('est-g6');
    } else if (staQ2 == 'noOffWork' && estQ3 == 'notToldMe') {
        res.redirect('est-g5');
    } else if (staQ2 == 'yesWorking' && estQ3 == 'notAsked') {
        res.redirect('com-g9');
    } else if (staQ2 == 'noOffWork' && estQ3 == 'notAsked') {
        res.redirect('com-g8');
    } else {
        res.redirect('est-g4');
    }   
});


router.post('/prototype-A/est-q6-routing', function (req, res) {
    
    let estQ6 = req.session.data.estQ6;

    if (estQ6 == 'yes'){
        res.redirect('est-g2&3');
    } else {
        res.redirect('est-q1');
    }   
});

router.post('/prototype-A/rea-q1-routing', function (req, res) {

    let reaQ1 = req.session.data.reaQ1;

    if (reaQ1 == 'yes'){
        res.redirect('rea-q2');
    } else if (reaQ1 == 'no') {
        res.redirect('rea-g3');
    } else {
        res.redirect('rea-g4');
    }   
});

router.post('/prototype-A/rea-q2-routing', function (req, res) {

    let reaQ2 = req.session.data.reaQ2;

    if (reaQ2 == 'yes'){
        res.redirect('rea-g5');
    } else {
        res.redirect('rea-g6');
    }   
});

router.post('/prototype-A/adj-q6-routing', function (req, res) {

    let adjQ6 = req.session.data.adjQ6;

    if (adjQ6 == 'yesTried'){
        res.redirect('dis-g1');
    } else {
        res.redirect('sum-5');
    }   
});

router.post('/prototype-A/est-q4-routing', function (req, res) {

    let staQ2 = req.session.data.staQ2;

    if (staQ2 == 'noOffWork'){
        res.redirect('com-q1');
    } else {
        res.redirect('com-q2');
    }   
});

router.post('/prototype-A/adj-q4-routing', function (req, res) {

    let adjQ2 = req.session.data.adjQ2;
    let staQ2 = req.session.data.staQ2;
    let adjQ4 = req.session.data.adjQ4;

    if (staQ2 == 'offWork' && adjQ2 == 'no' && adjQ4 == 'no') {
        res.redirect('dis-g2');
    } else if (staQ2 == 'stillWorking' && adjQ2 == 'no' && adjQ4 == 'no') {
        res.redirect('dis-g1');
    } else {
        res.redirect('adj-g5');
    }   
});

router.post('/prototype-A/adj-g5-routing', function (req, res) {

    let adjQ2 = req.session.data.adjQ2;
    let staQ2 = req.session.data.staQ2;
    let estQ6 = req.session.data.estQ6;  

    if (estQ6 == 'yes'){
        res.redirect('ret-g7');
    } else if (estQ6 == 'no' ){
        res.redirect('adj-g10');
    } else if (staQ2 == 'noOffWork' && adjQ2 == 'no'){
        res.redirect('dis-g2');
    } else if (staQ2 == 'yesWorking' && adjQ2 == 'no'){
        res.redirect('dis-g1');
    } else {
        res.redirect('adj-g10');
    }    
      
});

router.post('/prototype-A/com-q4-routing', function (req, res) {

    let comQ4 = req.session.data.comQ4;
    let estQ7 = req.session.data.estQ7;
    let currentSituation = req.session.data.currentSituation;

    const day = Number(req.session.data['employeeLeaveDateDayA'])
    const month = Number(req.session.data['employeeLeaveDateMonthA'])
    const year = Number(req.session.data['employeeLeaveDateYearA'])

    const startDate = dayjs({ year : year, month : month-1, day :day})

    const now = dayjs()

    const daysEmployeeOffSick = now.diff(startDate, "day")

    console.log(daysEmployeeOffSick)

    req.session.data['daysEmployeeOffSick'] = daysEmployeeOffSick

    if (daysEmployeeOffSick >= '28' && comQ4 == 'no') {
        res.redirect('adj-g14');
    } else if (estQ7 == 'yes' && comQ4 == 'no') {
        res.redirect('adj-g14');
    } else if (comQ4 == 'yes') {
        res.redirect('com-q5');
    } else {
        res.redirect('adj-g12');
    }
    
});


router.post('/prototype-A/com-q5-checklist-routing', function (req, res) {

    let comQ4 = req.session.data.comQ5;

        res.redirect('rea-c1');
  
});


module.exports = router
