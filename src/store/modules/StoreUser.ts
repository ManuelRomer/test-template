import store from '../../store'
import { getModule, Module, VuexModule } from 'vuex-module-decorators'
import { User } from '../Models'

@Module({
  name: 'StoreUser',
  namespaced: true,
  store,
  dynamic: true
})
class StoreUser extends VuexModule {
  private _user: User | null = {
    email: 'test@mail.com'
  }

  public get user(): User {
    return this._user
  }
}

export default getModule(StoreUser)
