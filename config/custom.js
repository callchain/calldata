/**
 * Custom configuration
 * (sails.config.custom)
 *
 * One-off settings specific to your application.
 *
 * For more information on custom configuration, visit:
 * https://sailsjs.com/config/custom
 */

module.exports.custom = {

  /***************************************************************************
  *                                                                          *
  * Any other custom config this Sails app should use during development.    *
  *                                                                          *
  ***************************************************************************/
  // mailgunDomain: 'transactional-mail.example.com',
  // mailgunSecret: 'key-testkeyb183848139913858e8abd9a3',
  // stripeSecret: 'sk_test_Zzd814nldl91104qor5911gjald',
  // …
  server: 'ws://s2.callchain.cc:5020',
  prefix: 'call-data',
  limit: 10,
  blks_key: 'latest-blocks',
  txs_key: 'latest-transactions',
  price_key: 'latest-price',

  tvconfig: {
    supports_search: true,
    supports_group_request: false,
    supports_marks: false,
    supports_timescale_marks: false,
    supports_time: false,
    exchanges:[
        {
          value: 'CallWallet',
          name: 'CallWallet',
          desc: ''
      },
    ],
    symbols_types:[
        {
          name: "Bitcoin",
          value: "bitcoin"
        }
    ],
    supported_resolutions:['1', '5', '15', '30', '60', '1D', '1W', '1M']
  },

  symbol_info: {
    'CALL_USD@c9GEywsWXZroNPmMgP1k4xjr7VRF6Gp4R7': {
      'name': 'CALL_USD@c9GEywsWXZroNPmMgP1k4xjr7VRF6Gp4R7',
      'ticker': 'CALL_USD@c9GEywsWXZroNPmMgP1k4xjr7VRF6Gp4R7',
      'exchange-traded': 'CallWallet',
      'exchange-listed"': 'CallWallet',
      'timezone': 'Asia/Singapore',
      'minmov': 1,
      'minmov2': 0,
      'pointvalue': 1,
      'session': '24x7',
      'has_intraday': true,
      'has_no_volume': false,
      'volume_precision': 6,
      'description': 'CALL_USD@c9GEywsWXZroNPmMgP1k4xjr7VRF6Gp4R7',
      'type': 'bitcoin',
      'supported_resolutions': ['1', '5', '15', '30', '60', '1D', '1W', '1M'],
      'intraday_multipliers': ['1', '1D'],
      'pricescale': 1000000
    }
  }

};
