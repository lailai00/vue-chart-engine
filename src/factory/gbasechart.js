import * as DataCollection from '../../static/dataCollection'
export default class ChartMaker {
  constructor () {
    this.data = DataCollection.fetchData()
    this.xml = null
  }

  static factory (type) {
    return new ChartMaker[type]()
  }
}
