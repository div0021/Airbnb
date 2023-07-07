
import {PrismaClient} from '@prisma/client';

declare global{
    var prisma: PrismaClient | undefined
} // this is done so that it will work out throught out the code
const client = globalThis.prisma || new PrismaClient();

if(process.env.NODE_ENV !== 'production'){
    globalThis.prisma=client
}

export default client;

