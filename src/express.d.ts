// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ClientInterface} from './interface/client-interface';

declare global {
    namespace Express {
        interface Request{
            client?: ClientInterface;
        }
    }
}