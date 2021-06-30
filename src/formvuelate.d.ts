// Generated by dts-bundle v0.7.3
// Dependencies for this module:
//   ../vue

declare module 'formvuelate' {
    import { DefineComponent } from "vue";
    import { PluginFunction } from "formvuelate/types/plugins";
    
    export function useSchemaForm<
        TValues extends Record<string, any> = Record<string, any>
    >(initialFormValues?: TValues): { formModel: TValues };
    
    export function SchemaFormFactory(
        plugins?: PluginFunction[],
        components?: Record<string, DefineComponent>
    ): DefineComponent;
    
    export { PluginFunction };
}

declare module 'formvuelate/types/plugins' {
    import { BaseSchemaReturns } from "formvuelate/types/schema";
    
    export type PluginFunction = (
        baseReturns: BaseSchemaReturns
    ) => BaseSchemaReturns;
}

declare module 'formvuelate/types/schema' {
    import { ComputedRef, DefineComponent } from "vue";
    
    export interface FieldSchema extends Record<string, any> {
        component: DefineComponent;
    }
    
    export interface FieldSchemaWithModel extends FieldSchema {
        model: any;
    }
    
    export type FormArraySchema = FieldSchemaWithModel[];
    
    export type FormObjectSchema = Record<string, FieldSchema>;
    
    export interface BaseSchemaReturns {
        behaveLikeParentSchema: ComputedRef<boolean>;
        parsedSchema: ComputedRef<FormArraySchema[]>;
        hasParentSchema: boolean;
        formBinds: ComputedRef<Record<string, any>>;
        slotBinds: ComputedRef<Record<string, any>>;
    }
}

