import {
  createContext,
  Dispatch,
  ReactNode,
  ReducerAction,
  useReducer,
} from 'react'
import { coffeesArray } from '../data/fakeData'
import { cartReducer, ICartState } from '../reducers/cart/reducer'

// interface CreateCycleData {
//   task: string
//   minutesAmount: number
// }

interface ICartContextType {
  state: ICartState
  dispatch: Dispatch<ReducerAction<any>>
}

export const CartContext = createContext({} as ICartContextType)

interface ICartContextProviderProps {
  children: ReactNode
}

export function CyclesContextProvider({ children }: ICartContextProviderProps) {
  const [state, dispatch] = useReducer(cartReducer, {
    cartItems: [],
    mainItems: coffeesArray,
  })

  // const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  // const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  // const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  return (
    <CartContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
