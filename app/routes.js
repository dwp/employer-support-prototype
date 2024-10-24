//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()


// Add your routes here

const express = require('express')
const dayjs = require('dayjs')
var objectSupport = require("dayjs/plugin/objectSupport");
dayjs.extend(objectSupport);
// viewing session data

// viewing session data
router.get('*/prototype-admin/view-data', function(req, res){
  querystring = '';
  for ( var key in req.session.data )
    querystring += key +'=' + req.session.data[key] + '&';
  res.render('prototype-admin/view-data', { data: JSON.stringify( req.session, null, 2), querystring: querystring } )
});

//Radio button redirect package
const radioButtonRedirect = require('radio-button-redirect')
router.use(radioButtonRedirect)

// Add your routes here - above the module.exports line

//Point to individual routes files for each iteration
// router.use('/beta/sprint-3', require('./views/beta/sprint-3/routes'));

router.use('/beta/sprint-3/prototype-A', require('./views/beta/sprint-3/prototype-A/routes'));

router.use('/beta/sprint-3/prototype-B', require('./views/beta/sprint-3/prototype-B/routes'));

router.use('/beta/sprint-4', require('./views/beta/sprint-4/routes'));

router.use('/beta/sprint-5', require('./views/beta/sprint-5/routes'));

router.use('/beta/mvp', require('./views/beta/mvp/routes'));

router.use('/beta/sprint-9', require('./views/beta/sprint-9/routes'));

router.use('/beta/sprint-10', require('./views/beta/sprint-10/routes'));

router.use('/beta/sprint-12', require('./views/beta/sprint-12/routes'));

router.use('/beta/sprint-21', require('./views/beta/sprint-21/routes'));

router.use('/beta/release-4-2-0', require('./views/beta/release-4-2-0/routes'));

router.use('/beta/release-4-4-0', require('./views/beta/release-4-4-0/routes'));

router.use('/beta/sprint-31', require('./views/beta/sprint-31/routes'));

router.use('/beta/sprint-33', require('./views/beta/sprint-33/routes'));

router.use('/beta/release-4-5-0', require('./views/beta/release-4-5-0/routes'));

router.use('/beta/sprint-34', require('./views/beta/sprint-34/routes'));

router.use('/beta/release-4-5-1', require('./views/beta/release-4-5-1/routes'));

router.use('/beta/sprint-39', require('./views/beta/sprint-39/routes'));

router.use('/beta/release-4-5-2', require('./views/beta/release-4-5-2/routes'));

router.use('/beta/release-4-6-0', require('./views/beta/release-4-6-0/routes'));

router.use('/beta/sprint-43', require('./views/beta/sprint-43/routes'));

router.use('/beta/sprint-45', require('./views/beta/sprint-45/routes'));

router.use('/beta/release-4-6-1', require('./views/beta/release-4-6-1/routes'));

router.use('/beta/sprint-47', require('./views/beta/sprint-47/routes'));

router.use('/beta/release-4-6-2', require('./views/beta/release-4-6-2/routes'));

router.use('/beta/release-4-6-3', require('./views/beta/release-4-6-3/routes'));

router.use('/beta/release-5-1-0', require('./views/beta/release-5-1-0/routes'));

router.use('/beta/sprint-52', require('./views/beta/sprint-52/routes'));

router.use('/beta/sprint-53', require('./views/beta/sprint-53/routes'));

router.use('/beta/sprint-54', require('./views/beta/sprint-54/routes'));

router.use('/beta/sprint-55', require('./views/beta/sprint-55/routes'));

router.use('/beta/sprint-56', require('./views/beta/sprint-56/routes'));

router.use('/beta/sprint-57', require('./views/beta/sprint-57/routes'));

router.use('/sandbox/usability-prototype', require('./views/sandbox/usability-prototype/routes'));

router.use('/sandbox/usability-prototype2', require('./views/sandbox/usability-prototype/routes'));

router.use('/sandbox/usability-prototype3', require('./views/sandbox/usability-prototype/routes'));

router.use('/beta/release-7-0-0', require('./views/beta/release-7-0-0/routes'));

router.use('/release/release1/english', require('./views/release/release1/english/routes'));

router.use('/release/release1/welsh', require('./views/release/release1/welsh/routes'));

router.use('/release/release2/english', require('./views/release/release2/english/routes'));

router.use('/release/release2/welsh', require('./views/release/release2/welsh/routes'));

router.use('/sandbox/layout-change', require('./views/sandbox/layout-change/routes'));

router.use('/sandbox/design-audit/english', require('./views/sandbox/design-audit/english/routes'));



// router.use('/beta/sprint-:routeVersion', (req, res, next) => {
//   var routeVersion = req.params.routeVersion
//   require('./beta/sprint-' + routeVersion + '/routes')(req, res, next)
// })

// Examples 
router.post('/test/date-test-answer', function (req, res) {

    const day = Number(req.session.data['TestDay'])
    const month = Number(req.session.data['TestMonth'])
    const year = Number(req.session.data['TestYear'])

    const startDate = dayjs({ year : year, month : month-1, day :day})

    const now = dayjs()

    const daysEmployeeOffSick = now.diff(startDate, "day")

    console.log(daysEmployeeOffSick)

    req.session.data['daysEmployeeOffSick'] = daysEmployeeOffSick

    res.redirect('/test/date-results-test')

  })

module.exports = router
