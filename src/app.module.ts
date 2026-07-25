import { McpApp, Module, ConfigModule } from '@nitrostack/core';
import { KnowledgeModule } from './modules/knowledge/knowledge.module.js';

/**
 * Root Application Module
 * 
 * Pizzaz and Knowledge Engine integration server.
 */
@McpApp({
    module: AppModule,
    server: {
        name: 'knowledge-pizzaz-mcp-server',
        version: '1.0.0'
    },
    logging: {
        level: 'info'
    }
})
@Module({
    name: 'root',
    description: 'Knowledge and Pizza MCP services',
    imports: [
        ConfigModule.forRoot(),
        KnowledgeModule
    ],
})
export class AppModule { }
