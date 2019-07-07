exports.id = "main";
exports.modules = {

/***/ "./src/resolvers/author.resolver.ts":
/*!******************************************!*\
  !*** ./src/resolvers/author.resolver.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const input_types_1 = __webpack_require__(/*! ./../schema/input-types */ "./src/schema/input-types.ts");
const author_service_1 = __webpack_require__(/*! ./../service/author.service */ "./src/service/author.service.ts");
const author_model_1 = __webpack_require__(/*! ./../models/author.model */ "./src/models/author.model.ts");
const type_graphql_1 = __webpack_require__(/*! type-graphql */ "type-graphql");
let AuthorResolver = class AuthorResolver {
    constructor(authorService) {
        this.authorService = authorService;
    }
    author(authorId) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('Query called');
            return this.authorService.getById(authorId);
        });
    }
    authors() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.authorService.getAll();
        });
    }
    createAuthor(author) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.authorService.createAuthor(author);
        });
    }
};
__decorate([
    type_graphql_1.Query(returns => author_model_1.Author, { nullable: true }),
    __param(0, type_graphql_1.Arg('authorId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AuthorResolver.prototype, "author", null);
__decorate([
    type_graphql_1.Query(returns => [author_model_1.Author]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AuthorResolver.prototype, "authors", null);
__decorate([
    type_graphql_1.Mutation(returns => author_model_1.Author),
    __param(0, type_graphql_1.Arg('author')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [input_types_1.AddAuthorInput]),
    __metadata("design:returntype", Promise)
], AuthorResolver.prototype, "createAuthor", null);
AuthorResolver = __decorate([
    type_graphql_1.Resolver(of => author_model_1.Author),
    __metadata("design:paramtypes", [author_service_1.AuthorService])
], AuthorResolver);
exports.AuthorResolver = AuthorResolver;


/***/ }),

/***/ "./src/schema/input-types.ts":
/*!***********************************!*\
  !*** ./src/schema/input-types.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = __webpack_require__(/*! type-graphql */ "type-graphql");
let AddAuthorInput = class AddAuthorInput {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], AddAuthorInput.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], AddAuthorInput.prototype, "email", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], AddAuthorInput.prototype, "url", void 0);
AddAuthorInput = __decorate([
    type_graphql_1.InputType()
], AddAuthorInput);
exports.AddAuthorInput = AddAuthorInput;


/***/ }),

/***/ "./src/service/author.service.ts":
/*!***************************************!*\
  !*** ./src/service/author.service.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const author_model_1 = __webpack_require__(/*! ./../models/author.model */ "./src/models/author.model.ts");
const typedi_1 = __webpack_require__(/*! typedi */ "typedi");
let AuthorService = class AuthorService {
    getById(id) {
        return author_model_1.AuthorModel.findById(id).exec();
    }
    getAll() {
        return author_model_1.AuthorModel.find().exec();
    }
    createAuthor(authorDoc) {
        return author_model_1.AuthorModel.create(authorDoc);
    }
    findByIds(ids) {
        return author_model_1.AuthorModel.find({
            _id: {
                $in: ids
            }
        }).exec();
    }
    updateAuthor(id, author) {
        return author_model_1.AuthorModel.findByIdAndUpdate(id, author, { new: true }).exec();
    }
};
AuthorService = __decorate([
    typedi_1.Service()
], AuthorService);
exports.AuthorService = AuthorService;


/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVzb2x2ZXJzL2F1dGhvci5yZXNvbHZlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NoZW1hL2lucHV0LXR5cGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlL2F1dGhvci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsUUFBUTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsb0NBQW9DO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxNQUFNLDZCQUE2QixFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ2pHLGtDQUFrQyxNQUFNLGlDQUFpQyxFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ3BHLCtCQUErQixpRUFBaUUsdUJBQXVCLEVBQUUsNEJBQTRCO0FBQ3JKO0FBQ0EsS0FBSztBQUNMO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsc0JBQXNCLG1CQUFPLENBQUMsNERBQXlCO0FBQ3ZELHlCQUF5QixtQkFBTyxDQUFDLG9FQUE2QjtBQUM5RCx1QkFBdUIsbUJBQU8sQ0FBQyw4REFBMEI7QUFDekQsdUJBQXVCLG1CQUFPLENBQUMsa0NBQWM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSw0REFBNEQsaUJBQWlCO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN2RWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsUUFBUTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsdUJBQXVCLG1CQUFPLENBQUMsa0NBQWM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixpQkFBaUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDN0JhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLFFBQVE7QUFDcEQ7QUFDQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVELHVCQUF1QixtQkFBTyxDQUFDLDhEQUEwQjtBQUN6RCxpQkFBaUIsbUJBQU8sQ0FBQyxzQkFBUTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLHlFQUF5RSxZQUFZO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmMxNjRhYzBmNmUwMmY1N2NmYjQ1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcbn07XG52YXIgX19wYXJhbSA9ICh0aGlzICYmIHRoaXMuX19wYXJhbSkgfHwgZnVuY3Rpb24gKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxufTtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgaW5wdXRfdHlwZXNfMSA9IHJlcXVpcmUoXCIuLy4uL3NjaGVtYS9pbnB1dC10eXBlc1wiKTtcbmNvbnN0IGF1dGhvcl9zZXJ2aWNlXzEgPSByZXF1aXJlKFwiLi8uLi9zZXJ2aWNlL2F1dGhvci5zZXJ2aWNlXCIpO1xuY29uc3QgYXV0aG9yX21vZGVsXzEgPSByZXF1aXJlKFwiLi8uLi9tb2RlbHMvYXV0aG9yLm1vZGVsXCIpO1xuY29uc3QgdHlwZV9ncmFwaHFsXzEgPSByZXF1aXJlKFwidHlwZS1ncmFwaHFsXCIpO1xubGV0IEF1dGhvclJlc29sdmVyID0gY2xhc3MgQXV0aG9yUmVzb2x2ZXIge1xuICAgIGNvbnN0cnVjdG9yKGF1dGhvclNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5hdXRob3JTZXJ2aWNlID0gYXV0aG9yU2VydmljZTtcbiAgICB9XG4gICAgYXV0aG9yKGF1dGhvcklkKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUXVlcnkgY2FsbGVkJyk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hdXRob3JTZXJ2aWNlLmdldEJ5SWQoYXV0aG9ySWQpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgYXV0aG9ycygpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmF1dGhvclNlcnZpY2UuZ2V0QWxsKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjcmVhdGVBdXRob3IoYXV0aG9yKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hdXRob3JTZXJ2aWNlLmNyZWF0ZUF1dGhvcihhdXRob3IpO1xuICAgICAgICB9KTtcbiAgICB9XG59O1xuX19kZWNvcmF0ZShbXG4gICAgdHlwZV9ncmFwaHFsXzEuUXVlcnkocmV0dXJucyA9PiBhdXRob3JfbW9kZWxfMS5BdXRob3IsIHsgbnVsbGFibGU6IHRydWUgfSksXG4gICAgX19wYXJhbSgwLCB0eXBlX2dyYXBocWxfMS5BcmcoJ2F1dGhvcklkJykpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBGdW5jdGlvbiksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtTdHJpbmddKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnJldHVybnR5cGVcIiwgUHJvbWlzZSlcbl0sIEF1dGhvclJlc29sdmVyLnByb3RvdHlwZSwgXCJhdXRob3JcIiwgbnVsbCk7XG5fX2RlY29yYXRlKFtcbiAgICB0eXBlX2dyYXBocWxfMS5RdWVyeShyZXR1cm5zID0+IFthdXRob3JfbW9kZWxfMS5BdXRob3JdKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgRnVuY3Rpb24pLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbXSksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpyZXR1cm50eXBlXCIsIFByb21pc2UpXG5dLCBBdXRob3JSZXNvbHZlci5wcm90b3R5cGUsIFwiYXV0aG9yc1wiLCBudWxsKTtcbl9fZGVjb3JhdGUoW1xuICAgIHR5cGVfZ3JhcGhxbF8xLk11dGF0aW9uKHJldHVybnMgPT4gYXV0aG9yX21vZGVsXzEuQXV0aG9yKSxcbiAgICBfX3BhcmFtKDAsIHR5cGVfZ3JhcGhxbF8xLkFyZygnYXV0aG9yJykpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBGdW5jdGlvbiksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtpbnB1dF90eXBlc18xLkFkZEF1dGhvcklucHV0XSksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpyZXR1cm50eXBlXCIsIFByb21pc2UpXG5dLCBBdXRob3JSZXNvbHZlci5wcm90b3R5cGUsIFwiY3JlYXRlQXV0aG9yXCIsIG51bGwpO1xuQXV0aG9yUmVzb2x2ZXIgPSBfX2RlY29yYXRlKFtcbiAgICB0eXBlX2dyYXBocWxfMS5SZXNvbHZlcihvZiA9PiBhdXRob3JfbW9kZWxfMS5BdXRob3IpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbYXV0aG9yX3NlcnZpY2VfMS5BdXRob3JTZXJ2aWNlXSlcbl0sIEF1dGhvclJlc29sdmVyKTtcbmV4cG9ydHMuQXV0aG9yUmVzb2x2ZXIgPSBBdXRob3JSZXNvbHZlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHR5cGVfZ3JhcGhxbF8xID0gcmVxdWlyZShcInR5cGUtZ3JhcGhxbFwiKTtcbmxldCBBZGRBdXRob3JJbnB1dCA9IGNsYXNzIEFkZEF1dGhvcklucHV0IHtcbn07XG5fX2RlY29yYXRlKFtcbiAgICB0eXBlX2dyYXBocWxfMS5GaWVsZCgpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBTdHJpbmcpXG5dLCBBZGRBdXRob3JJbnB1dC5wcm90b3R5cGUsIFwibmFtZVwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgdHlwZV9ncmFwaHFsXzEuRmllbGQoKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgU3RyaW5nKVxuXSwgQWRkQXV0aG9ySW5wdXQucHJvdG90eXBlLCBcImVtYWlsXCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICB0eXBlX2dyYXBocWxfMS5GaWVsZCh7IG51bGxhYmxlOiB0cnVlIH0pLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBTdHJpbmcpXG5dLCBBZGRBdXRob3JJbnB1dC5wcm90b3R5cGUsIFwidXJsXCIsIHZvaWQgMCk7XG5BZGRBdXRob3JJbnB1dCA9IF9fZGVjb3JhdGUoW1xuICAgIHR5cGVfZ3JhcGhxbF8xLklucHV0VHlwZSgpXG5dLCBBZGRBdXRob3JJbnB1dCk7XG5leHBvcnRzLkFkZEF1dGhvcklucHV0ID0gQWRkQXV0aG9ySW5wdXQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGF1dGhvcl9tb2RlbF8xID0gcmVxdWlyZShcIi4vLi4vbW9kZWxzL2F1dGhvci5tb2RlbFwiKTtcbmNvbnN0IHR5cGVkaV8xID0gcmVxdWlyZShcInR5cGVkaVwiKTtcbmxldCBBdXRob3JTZXJ2aWNlID0gY2xhc3MgQXV0aG9yU2VydmljZSB7XG4gICAgZ2V0QnlJZChpZCkge1xuICAgICAgICByZXR1cm4gYXV0aG9yX21vZGVsXzEuQXV0aG9yTW9kZWwuZmluZEJ5SWQoaWQpLmV4ZWMoKTtcbiAgICB9XG4gICAgZ2V0QWxsKCkge1xuICAgICAgICByZXR1cm4gYXV0aG9yX21vZGVsXzEuQXV0aG9yTW9kZWwuZmluZCgpLmV4ZWMoKTtcbiAgICB9XG4gICAgY3JlYXRlQXV0aG9yKGF1dGhvckRvYykge1xuICAgICAgICByZXR1cm4gYXV0aG9yX21vZGVsXzEuQXV0aG9yTW9kZWwuY3JlYXRlKGF1dGhvckRvYyk7XG4gICAgfVxuICAgIGZpbmRCeUlkcyhpZHMpIHtcbiAgICAgICAgcmV0dXJuIGF1dGhvcl9tb2RlbF8xLkF1dGhvck1vZGVsLmZpbmQoe1xuICAgICAgICAgICAgX2lkOiB7XG4gICAgICAgICAgICAgICAgJGluOiBpZHNcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuZXhlYygpO1xuICAgIH1cbiAgICB1cGRhdGVBdXRob3IoaWQsIGF1dGhvcikge1xuICAgICAgICByZXR1cm4gYXV0aG9yX21vZGVsXzEuQXV0aG9yTW9kZWwuZmluZEJ5SWRBbmRVcGRhdGUoaWQsIGF1dGhvciwgeyBuZXc6IHRydWUgfSkuZXhlYygpO1xuICAgIH1cbn07XG5BdXRob3JTZXJ2aWNlID0gX19kZWNvcmF0ZShbXG4gICAgdHlwZWRpXzEuU2VydmljZSgpXG5dLCBBdXRob3JTZXJ2aWNlKTtcbmV4cG9ydHMuQXV0aG9yU2VydmljZSA9IEF1dGhvclNlcnZpY2U7XG4iXSwic291cmNlUm9vdCI6IiJ9