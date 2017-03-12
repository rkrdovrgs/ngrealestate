// Reflect.deleteMetadata ( metadataKey, target [, propertyKey] )
// - https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#reflectdeletemetadata--metadatakey-target--propertykey-
System.register(["../../Reflect", "assert"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function ReflectDeleteMetadataInvalidTarget() {
        assert.throws(function () { return Reflect.deleteMetadata("key", undefined, undefined); }, TypeError);
    }
    exports_1("ReflectDeleteMetadataInvalidTarget", ReflectDeleteMetadataInvalidTarget);
    function ReflectDeleteMetadataWhenNotDefinedWithoutTargetKey() {
        var obj = {};
        var result = Reflect.deleteMetadata("key", obj, undefined);
        assert.equal(result, false);
    }
    exports_1("ReflectDeleteMetadataWhenNotDefinedWithoutTargetKey", ReflectDeleteMetadataWhenNotDefinedWithoutTargetKey);
    function ReflectDeleteMetadataWhenDefinedWithoutTargetKey() {
        var obj = {};
        Reflect.defineMetadata("key", "value", obj, undefined);
        var result = Reflect.deleteMetadata("key", obj, undefined);
        assert.equal(result, true);
    }
    exports_1("ReflectDeleteMetadataWhenDefinedWithoutTargetKey", ReflectDeleteMetadataWhenDefinedWithoutTargetKey);
    function ReflectDeleteMetadataWhenDefinedOnPrototypeWithoutTargetKey() {
        var prototype = {};
        Reflect.defineMetadata("key", "value", prototype, undefined);
        var obj = Object.create(prototype);
        var result = Reflect.deleteMetadata("key", obj, undefined);
        assert.equal(result, false);
    }
    exports_1("ReflectDeleteMetadataWhenDefinedOnPrototypeWithoutTargetKey", ReflectDeleteMetadataWhenDefinedOnPrototypeWithoutTargetKey);
    function ReflectHasOwnMetadataAfterDeleteMetadata() {
        var obj = {};
        Reflect.defineMetadata("key", "value", obj, undefined);
        Reflect.deleteMetadata("key", obj, undefined);
        var result = Reflect.hasOwnMetadata("key", obj, undefined);
        assert.equal(result, false);
    }
    exports_1("ReflectHasOwnMetadataAfterDeleteMetadata", ReflectHasOwnMetadataAfterDeleteMetadata);
    var assert;
    return {
        setters: [
            function (_1) {
            },
            function (assert_1) {
                assert = assert_1;
            }
        ],
        execute: function () {// Reflect.deleteMetadata ( metadataKey, target [, propertyKey] )
            // - https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#reflectdeletemetadata--metadatakey-target--propertykey-
        }
    };
});
//# sourceMappingURL=reflect-deletemetadata.js.map