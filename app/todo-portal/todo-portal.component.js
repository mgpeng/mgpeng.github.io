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
var core_1 = require('@angular/core');
var todo_service_1 = require('./service/todo.service');
var todo_list_component_1 = require('./todo-list/todo-list.component');
var todo_form_component_1 = require('./todo-form/todo-form.component');
var remain_archive_component_1 = require('./remain-archive/remain-archive.component');
var page_scroll_directive_1 = require('../page-scroll-directive/page-scroll.directive');
var TodoPortalComponent = (function () {
    function TodoPortalComponent(_tS) {
        this._tS = _tS;
        this.title = "Todo Portal";
        //----------------------------------//
        this.myEasing = function (t, b, c, d) {
            // easeInOutExpo easing
            if (t === 0)
                return b;
            if (t === d)
                return b + c;
            if ((t /= d / 2) < 1)
                return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
            return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
        };
    }
    TodoPortalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._tS.getTodoSlowly().then(function (tds) { return _this.todos = tds; });
    };
    TodoPortalComponent.prototype.checkTask = function (index) {
        this.todos[index].done = !this.todos[index].done;
        this.todos = [].concat(this.todos);
    };
    TodoPortalComponent.prototype.addNewTodo = function (todo) {
        this.todos = this.todos.concat(todo);
    };
    TodoPortalComponent.prototype.deleteDoneTask = function (tds) {
        this.todos = this.todos.filter(function (todo) { return !todo.done; });
        this.todos = [].concat(this.todos);
    };
    TodoPortalComponent = __decorate([
        core_1.Component({
            selector: 'todo-portal',
            template: "\n            <h2>{{title}}</h2>\n            <remain-archive [tdListIn]=\"todos\" \n                            (delDone_evt)=\"deleteDoneTask($event)\"\n                            ></remain-archive>  \n            <todo-list [todoListIn]=\"todos\" \n                       (check_evt)=\"checkTask($event)\"></todo-list>\n            <todo-form (addTask_evt)=\"addNewTodo($event)\"></todo-form>\n            \n            \n            <p>Do you want to <a href=\"#anchor1\" pageScroll>go to the first heading</a> or\n    <a href=\"#anchor2\" pageScroll [pageScrollEasing]=\"myEasing\">the second one with a custom easing</a>?</p>\n\n<p>Visit another page and press the \"2nd anchor\" link, to see how ng2-page-scroll works across routes.</p>\n\n<p><img src=\"http://lorempixel.com/g/400/200/technics/\" class=\"left\"/>Lorem ipsum dolor sit amet, consectetur adipiscing\n    elit. Prioris generis est docilitas, memoria; Illa argumenta propria videamus, cur omnia sint paria peccata. Quae\n    cum praeponunt, ut sit aliqua rerum selectio, naturam videntur sequi; Ille vero, si insipiens-quo certe, quoniam\n    tyrannus -, numquam beatus; Atqui eorum nihil est eius generis, ut sit in fine atque extrerno bonorum. Aliter enim\n    explicari, quod quaeritur, non potest. Vos autem cum perspicuis dubia debeatis illustrare, dubiis perspicua conamini\n    tollere. Quamquam in hac divisione rem ipsam prorsus probo, elegantiam desidero. </p>\n\n<p>Duo Reges: constructio interrete. Quam ob rem tandem, inquit, non satisfacit? Hinc ceteri particulas arripere conati\n    suam quisque videro voluit afferre sententiam. Putabam equidem satis, inquit, me dixisse. Tum Quintus: Est plane,\n    Piso, ut dicis, inquit. Sit enim idem caecus, debilis. An hoc usque quaque, aliter in vita? Aufert enim sensus\n    actionemque tollit omnem. </p>\n\n<p>Illa argumenta propria videamus, cur omnia sint paria peccata. Quid sequatur, quid repugnet, vident. Non modo carum\n    sibi quemque, verum etiam vehementer carum esse? Et quidem, inquit, vehementer errat; Isto modo ne improbos quidem,\n    si essent boni viri. A villa enim, credo, et: Si ibi te esse scissem, ad te ipse venissem. Primum in nostrane\n    potestate est, quid meminerimus? Quae hic rei publicae vulnera inponebat, eadem ille sanabat. Etenim nec iustitia\n    nec amicitia esse omnino poterunt, nisi ipsae per se expetuntur. Dici enim nihil potest verius. </p>\n\n<h1 id=\"anchor1\">Non enim quaero quid verum, sed quid cuique dicendum sit.</h1>\n<p><img src=\"http://lorempixel.com/g/400/200/business/\" class=\"right\"/>Tollenda est atque extrahenda radicitus.\n    Paupertas si malum est, mendicus beatus esse nemo potest, quamvis sit sapiens. Atque hoc loco similitudines eas,\n    quibus illi uti solent, dissimillimas proferebas. Sed tu istuc dixti bene Latine, parum plane. </p>\n\n<p>Fortasse id optimum, sed ubi illud: Plus semper voluptatis? Paria sunt igitur. Aufert enim sensus actionemque tollit\n    omnem. Nescio quo modo praetervolavit oratio. Quae est igitur causa istarum angustiarum? Non laboro, inquit, de\n    nomine. Non est ista, inquam, Piso, magna dissensio. Tu quidem reddes; </p>\n\n<p>Eadem nunc mea adversum te oratio est. Duo Reges: constructio interrete. Ita relinquet duas, de quibus etiam atque\n    etiam consideret. Invidiosum nomen est, infame, suspectum. Indicant pueri, in quibus ut in speculis natura cernitur.\n    Cum audissem Antiochum, Brute, ut solebam, cum M. Sit enim idem caecus, debilis. Videmusne ut pueri ne verberibus\n    quidem a contemplandis rebus perquirendisque deterreantur? </p>\n\n<p>An haec ab eo non dicuntur? Quod quidem iam fit etiam in Academia. Scaevolam M. Post enim Chrysippum eum non sane est\n    disputatum. Tanta vis admonitionis inest in locis; Expectoque quid ad id, quod quaerebam, respondeas. Videamus animi\n    partes, quarum est conspectus illustrior; Atqui perspicuum est hominem e corpore animoque constare, cum primae sint\n    animi partes, secundae corporis. </p>\n\n<p>Sit ista in Graecorum levitate perversitas, qui maledictis insectantur eos, a quibus de veritate dissentiunt. Semper\n    enim ex eo, quod maximas partes continet latissimeque funditur, tota res appellatur. Ita graviter et severe\n    voluptatem secrevit a bono. Ratio enim nostra consentit, pugnat oratio. Invidiosum nomen est, infame, suspectum.\n    Habes, inquam, Cato, formam eorum, de quibus loquor, philosophorum. Sed in rebus apertissimis nimium longi sumus.\n    Eam si varietatem diceres, intellegerem, ut etiam non dicente te intellego; Quae sunt igitur communia vobis cum\n    antiquis, iis sic utamur quasi concessis; Plane idem, inquit, et maxima quidem, qua fieri nulla maior potest. </p>\n\n<h1 id=\"anchor2\">Quod quidem iam fit etiam in Academia. Quorum sine causa fieri nihil putandum est.</h1>\n\n<p>Cur, nisi quod turpis oratio est? Ut optime, secundum naturam affectum esse possit. Eam si varietatem diceres,\n    intellegerem, ut etiam non dicente te intellego; Dic in quovis conventu te omnia facere, ne doleas. Illa videamus,\n    quae a te de amicitia dicta sunt. Ita multa dicunt, quae vix intellegam. Age nunc isti doceant, vel tu potius quis\n    enim ista melius? Itaque ad tempus ad Pisonem omnes. Quare hoc videndum est, possitne nobis hoc ratio philosophorum\n    dare. Mihi, inquam, qui te id ipsum rogavi? Iam in altera philosophiae parte. Mene ergo et Triarium dignos\n    existimas, apud quos turpiter loquare? </p>\n\n<p>Honesta oratio, Socratica, Platonis etiam. Murenam te accusante defenderem. Illa tamen simplicia, vestra versuta. Ita\n    ne hoc quidem modo paria peccata sunt. Quid enim de amicitia statueris utilitatis causa expetenda vides. Post enim\n    Chrysippum eum non sane est disputatum. Putabam equidem satis, inquit, me dixisse. Nam si amitti vita beata potest,\n    beata esse non potest. </p>\n\n<p>Sed ad bona praeterita redeamus. Quid autem habent admirationis, cum prope accesseris? Quod ea non occurrentia\n    fingunt, vincunt Aristonem; At ille pellit, qui permulcet sensum voluptate. Quae est igitur causa istarum\n    angustiarum? </p>\n\n<p>Equidem etiam Epicurum, in physicis quidem, Democriteum puto. Cur iustitia laudatur? Primum in nostrane potestate\n    est, quid meminerimus? Sed vos squalidius, illorum vides quam niteat oratio. Ergo illi intellegunt quid Epicurus\n    dicat, ego non intellego? Sed hoc sane concedamus. Ergo instituto veterum, quo etiam Stoici utuntur, hinc capiamus\n    exordium. Que Manilium, ab iisque M. </p>\n\n<p>Pisone in eo gymnasio, quod Ptolomaeum vocatur, unaque nobiscum Q. At certe gravius. Iam doloris medicamenta illa\n    Epicurea tamquam de narthecio proment: Si gravis, brevis; Negat esse eam, inquit, propter se expetendam. Duo enim\n    genera quae erant, fecit tria. Teneo, inquit, finem illi videri nihil dolere. Qua ex cognitione facilior facta est\n    investigatio rerum occultissimarum. Videamus igitur sententias eorum, tum ad verba redeamus. Tamen a proposito,\n    inquam, aberramus. Qui ita affectus, beatum esse numquam probabis; </p>\n\n<p>Ipse Epicurus fortasse redderet, ut Sextus Peducaeus, Sex. Perge porro; Huic ego, si negaret quicquam interesse ad\n    beate vivendum quali uteretur victu, concederem, laudarem etiam; Tu enim ista lenius, hic Stoicorum more nos vexat.\n    Sunt enim prima elementa naturae, quibus auctis v\u00EDrtutis quasi germen efficitur. Non enim quaero quid verum, sed\n    quid cuique dicendum sit. Nos commodius agimus. </p>\n\n<p><a href=\"#head\" pageScroll [pageScrollDuration]=\"2500\">Go to head in 2.5 seconds</a></p>\n\n\n    ",
            directives: [todo_list_component_1.TodoListComponent, todo_form_component_1.TodoFormComponent, remain_archive_component_1.RemainArchiveComponent,
                page_scroll_directive_1.PageScroll
            ],
            providers: [todo_service_1.TodoService]
        }), 
        __metadata('design:paramtypes', [todo_service_1.TodoService])
    ], TodoPortalComponent);
    return TodoPortalComponent;
}());
exports.TodoPortalComponent = TodoPortalComponent;
//# sourceMappingURL=todo-portal.component.js.map